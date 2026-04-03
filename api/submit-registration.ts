/**
 * Vercel Serverless Function for Google Sheets API Integration
 * This provides a secure backend proxy to hide API keys
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

// Enable CORS
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).json({ headers: corsHeaders });
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const sheetId = process.env.GOOGLE_SHEET_ID;
    const apiKey = process.env.GOOGLE_API_KEY;

    if (!sheetId || !apiKey) {
      throw new Error('Missing Google Sheets configuration');
    }

    const { data, action = 'append' } = req.body;

    if (!data) {
      return res.status(400).json({ error: 'No data provided' });
    }

    // Validate required fields
    const requiredFields = ['fullName', 'email', 'phone'];
    const missingFields = requiredFields.filter(field => !data[field]);
    
    if (missingFields.length > 0) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        fields: missingFields 
      });
    }

    // Sanitize email
    const sanitizedEmail = data.email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(sanitizedEmail)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Prepare row data based on sheet structure
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.registrationId || `AII2026-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      data.role || 'Participant',
      data.fullName,
      sanitizedEmail,
      data.phone,
      data.organization || data.college || 'N/A',
      data.designation || data.course || 'N/A',
      data.linkedin || 'N/A',
      data.bio || data.requirements || 'N/A',
      data.city || 'N/A',
      data.state || 'N/A',
      data.additionalInfo || 'N/A',
    ];

    // Append to Google Sheets
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet2:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS&key=${apiKey}`;

    const response = await axios.post(url, {
      values: [rowData],
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return res.status(200).json({
      success: true,
      message: 'Data submitted successfully',
      registrationId: rowData[1],
    });

  } catch (error: any) {
    console.error('Google Sheets API Error:', error.message);
    
    return res.status(500).json({
      error: 'Failed to submit data',
      message: error.message || 'Unknown error occurred',
    });
  }
}
