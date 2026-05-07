
import { BatchConfig } from './types';

/**
 * ============================================================================
 *  INSTITUTION CONFIGURATION
 *  Update this section to customize the portal for your college.
 * ============================================================================
 */
export const INSTITUTION_CONFIG = {
  // Display Name appearing in the Header
  name: "AVSEC Reward Points Site", 
  
  // URL to the college logo (Direct link to image)
logoUrl: "https://lh3.googleusercontent.com/d/1HAi70zVEf7sfLXk4H8W7uPF_rbHMmqC9=w500"
};

/**
 *  ADMIN AUTHENTICATION SHEET
 *  Sheet containing columns: Email Address, Password, Name, Department
 */
export const ADMIN_AUTH_CONFIG = {
  id: "15F12oZv8krN9JPCogO7e4i1nE5jsk5DJJuhdLxQ-zTQ",
  name: "Admin_Credentials"
};

/**
 *  ELITE STUDENT AUTHENTICATION SHEET
 *  Sheet containing columns: Email Address, Name, Register No, Department, Password
 */
export const ELITE_AUTH_CONFIG = {
  id: "1nIkD73XZ9uykJ_LRJM0GGBJCd73nUh0_xf2-_PGKeVI",
  name: "Sheet1" 
};


/**
 * ============================================================================
 *  ACADEMIC DATA CONFIGURATION
 *  Manage Sheets, Batches, and Subject Definitions here.
 * ============================================================================
 */

export const BATCHES: BatchConfig[] = [
  // --------------------------------------------------------------------------
  // BATCH 1: 2025 - 2028 (1st Year)
  // --------------------------------------------------------------------------
  {
    id: 'batch-2025-2028',
    label: 'Batch 2025 - 2029 (1st Year)',
    semesters: {
      "1": { 
        label: "Semester 2", 
        internals: ["IP1", "IP2"],
        
        // --- SEMESTER 1 SHEETS ---
        rewardSheets: {
          IP1: { id: "1W0revb6JjZqYHGvKBykvX7GyDx32fJFL72hNrXH5HD0", name: "AVS_2025-2029_All_S2_IP1_RewardSplit" }
          // IP2: { id: "1cJc1Vc2PSAo6hUlGJSX_8R4jUnjzHA", name: "RCS_1styear_IP2_RewardsSplit" }
        },
        
        internalMarksSheets: {
          IP1: {
            "MECH": { id: "14A33H7s8SNZgjRnfvgESCrAzK6K7R-4puQbaAlgQTzw", name: "MECH" },
            "BME": { id: "1ydFoERh8XFsQOU2Qi6eV_FdRsdsc3d0z8jI50bF1dFo", name: "BME" },
            "CIVIL": { id: "1FyFi84YSKHGHHxBE0rEd_LhCJWeNcwXj3VXSd3QK-SI", name: "CIVIL" },
            "AI&DS": { id: "1Sr-cXu0NObfhD_AtKAjk0cdLIMZah1WvD6QAoVRCGLE", name: "AI&DS" },
            "CSE": { id: "1b0yCrYskT01B8a1uIyDIAc6AWqILV-0m5e846RENtrs", name: "CSE" },
            "ECE": { id: "117ObwLKacCAweRJc-cW8bGDXKyvvT8vPnW58ypklg4M", name: "ECE" },
            "EEE": { id: "1ExmZQk28k0jsl8lH6IRBSOXkCFuKANCcI-OPPu6q28I", name: "EEE" },
            "IT": { id: "1nj1h-G64fqSkVd4Lr7W9IgOnqWYyplUbXjcyjaAVJ4U", name: "IT" },
            "AI&ML": { id: "1MmP_uwNpzLQdcefau2Gi90H6TunIb91QAJfLtv-znzM", name: "AI&ML" }
          }
          // IP2: {
          //   "B.Sc  AIML": { id: "1eHcJZfwa8DaQLH_mxp4", name: "B.Sc  AIML" },
          //   "B.Sc  CS with AI": { id: "1Z1iK7UpChhf4p5oDar2mhStX96s", name: "B.Sc  CS with AI" },
          //   "B.Sc CS": { id: "1w-9Nxy6X1pMTBU8YTOXozsU", name: "B.Sc CS" },
          //   "B.Sc DCFS": { id: "1sUdFzj8_LXMntv6tQgjy94rM", name: "B.Sc DCFS" },
          //   "B.Sc DS": { id: "1usnswuhn5chnx58-XioTEk", name: "B.Sc DS" },
          //   "B.Sc DSA": { id: "1v_ucgOpVWSYV50Z1Kiln_r593pg", name: "B.Sc DSA" },
          //   "B.Sc IT": { id: "1BZ9VS712RmFe9X8HKAzoacym4", name: "B.Sc IT" }
          // }
        },

        // --- SEMESTER 1 SUBJECTS ---
        subjectConfig: {
          defaultMaxMarks: {
            Theory: 20,
            Lab: 20,
            "Lab+Theory": 20
          },
          departments: {
"MECH": [
    { code: "UC25H02", type: "Theory", maxMarks: 20 },
    { code: "EN25C02", type: "Lab+Theory", maxMarks: 20 },
    { code: "MA25C02", type: "Theory", maxMarks: 20 },
    { code: "PH25C05", type: "Theory", maxMarks: 20 },
    { code: "CY25C03", type: "Theory", maxMarks: 20 },
    { code: "ME25C02", type: "Theory", maxMarks: 20 },
    { code: "EE25C01", type: "Theory", maxMarks: 20 },
    { code: "ME25C05", type: "Lab", maxMarks: 20 }
  ],

  "BME": [
    { code: "UC25H02", type: "Theory", maxMarks: 20 },
    { code: "EN25C02", type: "Lab+Theory", maxMarks: 20 },
    { code: "MA25C02", type: "Theory", maxMarks: 20 },
    { code: "ME25C02", type: "Theory", maxMarks: 20 },
    { code: "PH25C07", type: "Theory", maxMarks: 20 },
    { code: "BM25C01", type: "Lab+Theory", maxMarks: 20 },
    { code: "BM25C02", type: "Lab+Theory", maxMarks: 20 },
    { code: "ME25C05", type: "Lab", maxMarks: 20 }
  ],

  "CIVIL": [
    { code: "UC25H02", type: "Theory", maxMarks: 20 },
    { code: "EN25C02", type: "Lab+Theory", maxMarks: 20 },
    { code: "MA25C02", type: "Theory", maxMarks: 20 },
    { code: "PH25C02", type: "Theory", maxMarks: 20 },
    { code: "CY25C02", type: "Theory", maxMarks: 20 },
    { code: "ME25C02", type: "Theory", maxMarks: 20 },
    { code: "CE25201", type: "Theory", maxMarks: 20 },
    { code: "EE25C01", type: "Theory", maxMarks: 20 },
    { code: "ME25C05", type: "Lab", maxMarks: 20 }
  ],

  "AI&DS": [
    { code: "UC25H02", type: "Theory", maxMarks: 20 },
    { code: "EN25C02", type: "Lab+Theory", maxMarks: 20 },
    { code: "MA25C02", type: "Theory", maxMarks: 20 },
    { code: "PH25C03", type: "Theory", maxMarks: 20 },
    { code: "EE25C01", type: "Theory", maxMarks: 20 },
    { code: "CS25C06", type: "Theory", maxMarks: 20 },
    { code: "AD25201", type: "Lab+Theory", maxMarks: 20 },
    { code: "ME25C05", type: "Lab", maxMarks: 20 }
  ],

  "CSE": [
    { code: "UC25H02", type: "Theory", maxMarks: 20 },
    { code: "EN25C02", type: "Lab+Theory", maxMarks: 20 },
    { code: "MA25C02", type: "Theory", maxMarks: 20 },
    { code: "PH25C03", type: "Theory", maxMarks: 20 },
    { code: "EE25C01", type: "Theory", maxMarks: 20 },
    { code: "CS25C06", type: "Theory", maxMarks: 20 },
    { code: "CS25C07", type: "Lab+Theory", maxMarks: 20 },
    { code: "ME25C05", type: "Lab", maxMarks: 20 }
  ],

  "ECE": [
    { code: "UC25H02", type: "Theory", maxMarks: 20 },
    { code: "EN25C02", type: "Lab+Theory", maxMarks: 20 },
    { code: "MA25C02", type: "Theory", maxMarks: 20 },
    { code: "EC25C01", type: "Theory", maxMarks: 20 },
    { code: "EC25C02", type: "Theory", maxMarks: 20 },
    { code: "EC25C03", type: "Lab", maxMarks: 20 },
    { code: "CS25C05", type: "Lab+Theory", maxMarks: 20 },
    { code: "ME25C05", type: "Lab", maxMarks: 20 }
  ],

  "EEE": [
    { code: "UC25H02", type: "Theory", maxMarks: 20 },
    { code: "EN25C02", type: "Lab+Theory", maxMarks: 20 },
    { code: "MA25C03", type: "Theory", maxMarks: 20 },
    { code: "PH25C04", type: "Theory", maxMarks: 20 },
    { code: "ME25C01", type: "Lab+Theory", maxMarks: 20 },
    { code: "CS25C04", type: "Lab+Theory", maxMarks: 20 },
    { code: "ME25C05", type: "Lab", maxMarks: 20 },
    { code: "GE25C01", type: "Theory", maxMarks: 20 }
  ],

  "IT": [
    { code: "UC25H02", type: "Theory", maxMarks: 20 },
    { code: "EN25C02", type: "Lab+Theory", maxMarks: 20 },
    { code: "MA25C02", type: "Theory", maxMarks: 20 },
    { code: "PH25C02", type: "Theory", maxMarks: 20 },
    { code: "EE25C01", type: "Theory", maxMarks: 20 },
    { code: "IT25201", type: "Lab+Theory", maxMarks: 20 },
    { code: "IT25202", type: "Lab+Theory", maxMarks: 20 },
    { code: "ME25C05", type: "Lab", maxMarks: 20 }
  ],

  "AI&ML": [
    { code: "UC25H02", type: "Theory", maxMarks: 20 },
    { code: "EN25C02", type: "Lab+Theory", maxMarks: 20 },
    { code: "MA25C02", type: "Theory", maxMarks: 20 },
    { code: "PH25C03", type: "Theory", maxMarks: 20 },
    { code: "EE25C01", type: "Theory", maxMarks: 20 },
    { code: "CS25C06", type: "Theory", maxMarks: 20 },
    { code: "CS25C07", type: "Lab+Theory", maxMarks: 20 },
    { code: "ME25C05", type: "Lab", maxMarks: 20 }
  ]
          }
        }
      } 
    }
  },

        // --- END SEMESTER 1 ---
              // ============================================================
      // SEMESTER 2 (NEW — SAMPLE DATA, CHANGE SHEET IDs)
      // ============================================================

  //     "2": {

  //       label: "Semester 2",

  //       internals: ["IP1", "IP2"],

  //       rewardSheets: {

  //         IP1: {
  //           id: "1cByligzZTzKQQgJA1KTkiEHT1ggeFLibdoFJdHXI4Bw",
  //           name: "Semester2_IP1_Rewards"
  //         },

  //         IP2: {
  //           id: "PASTE_SEM2_IP2_REWARD_SHEET_ID",
  //           name: "Semester2_IP2_Rewards"
  //         }

  //       },


  //       internalMarksSheets: {

  //       IP1: {
  //           "B.Sc  AIML": { id: "1fX3C0pqWoJ1NtxpH2TT8kRCrJwOZnQ1IumxifGgnr8Q", name: "B.Sc  AIML" },
  //           "B.Sc  CS with AI": { id: "14a6Wad24n2yGvuuJE1W8qMkvKqzbG9C24dGrnmaJZMI", name: "B.Sc  CS with AI" },
  //           "B.Sc CS": { id: "134Xxcovbetu9Ftp0byVoHlcVUNlz6t6OKpnbKI1ISHw", name: "B.Sc CS" },
  //           "B.Sc DCFS": { id: "1j9EYqC52mTdVymkuSpphqVJJ_Tb1xFVwc2U2oBO_mLY", name: "B.Sc DCFS" },
  //           "B.Sc DS": { id: "1iWG670KusT54z5nj_UoWldhsm9XJGmf4w-rmjPwEfoc", name: "B.Sc DS" },
  //           "B.Sc DSA": { id: "1toZUWr1dfEknSrWIl65FLyV24VnXs5nzXVFQJBHs9VY", name: "B.Sc DSA" },
  //           "B.Sc IT": { id: "1yFS1h8Xd3c0JozHspL81sDdj6iIm0yriqCg0FewlteM", name: "B.Sc IT" }
  //         },


  //         IP2: {

  //           "B.Sc CS": {
  //             id: "PASTE_SEM2_IP2_CS_INTERNAL_SHEET_ID",
  //             name: "B.Sc CS"
  //           },

  //           "B.Sc IT": {
  //             id: "PASTE_SEM2_IP2_IT_INTERNAL_SHEET_ID",
  //             name: "B.Sc IT"
  //           }

  //         }

  //       },


  //       subjectConfig: {

  //         defaultMaxMarks: {
  //           Theory: 15,
  //           Lab: 15,
  //           "Lab + Theory": 15
  //         },

  //         departments: {

  //           "B.Sc CS": [
  //   { code: "25BCS2CA", type: "Theory", maxMarks: 15 },
  //   { code: "25BCS2CP", type: "Lab", maxMarks: 15 },
  //   { code: "25BCS2AA", type: "Theory", maxMarks: 15 },
  //   { code: "25BCS2EA", type: "Theory", maxMarks: 15 },
  //   { code: "25BCS21T", type: "Theory", maxMarks: 15 },
  //   { code: "25BCS22E", type: "Theory", maxMarks: 15 }
  // ],

  // "B.Sc  CS with AI": [
  //   { code: "25BAR2CA", type: "Theory", maxMarks: 15 },
  //   { code: "25BAR2CP", type: "Lab", maxMarks: 15 },
  //   { code: "25BAR2AA", type: "Theory", maxMarks: 15 },
  //   { code: "25BAR2EA", type: "Theory", maxMarks: 15 },
  //   { code: "25BCS21T", type: "Theory", maxMarks: 15 },
  //   { code: "25BCS22E", type: "Theory", maxMarks: 15 }
  // ],

  // "B.Sc  AIML": [
  //   { code: "25BAM2CA", type: "Theory", maxMarks: 15 },
  //   { code: "25BAM2CP", type: "Lab", maxMarks: 15 },
  //   { code: "25BAM2AA", type: "Theory", maxMarks: 15 },
  //   { code: "25BAM2EA", type: "Theory", maxMarks: 15 },
  //   { code: "25BCS21T", type: "Theory", maxMarks: 15 },
  //   { code: "25BCS22E", type: "Theory", maxMarks: 15 }
  // ],

  // "B.Sc DSA": [
  //   { code: "25BDA2CA", type: "Theory", maxMarks: 15 },
  //   { code: "25BDA2CP", type: "Lab", maxMarks: 15 },
  //   { code: "25BDA2AA", type: "Theory", maxMarks: 15 },
  //   { code: "25BDA2EA", type: "Theory", maxMarks: 15 },
  //   { code: "25BCS21T", type: "Theory", maxMarks: 15 },
  //   { code: "25BCS22E", type: "Theory", maxMarks: 15 }
  // ],

  // "B.Sc DS": [
  //   { code: "25BDS2CA", type: "Theory", maxMarks: 15 },
  //   { code: "25BDS2CP", type: "Lab", maxMarks: 15 },
  //   { code: "25BDS2AA", type: "Theory", maxMarks: 15 },
  //   { code: "25BDS2EA", type: "Theory", maxMarks: 15 },
  //   { code: "25BCS21T", type: "Theory", maxMarks: 15 },
  //   { code: "25BCS22E", type: "Theory", maxMarks: 15 }
  // ],

  // "B.Sc IT": [
  //   { code: "25BIT2CA", type: "Theory", maxMarks: 15 },
  //   { code: "25BIT2CP", type: "Lab", maxMarks: 15 },
  //   { code: "25BIT2AA", type: "Theory", maxMarks: 15 },
  //   { code: "25BIT2EA", type: "Theory", maxMarks: 15 },
  //   { code: "25BCS21T", type: "Theory", maxMarks: 15 },
  //   { code: "25BCS22E", type: "Theory", maxMarks: 15 }
    
  // ],
  // "B.Sc DCFS": [
  //   { code: "25BDC2CA", type: "Theory", maxMarks: 15 },
  //   { code: "25BDC2CP", type: "Lab", maxMarks: 15 },
  //   { code: "25BDC2AA", type: "Theory", maxMarks: 15 },
  //   { code: "25BDC2EA", type: "Theory", maxMarks: 15 },
  //   { code: "25BCS21T", type: "Theory", maxMarks: 15 },
  //   { code: "25BCS22E", type: "Theory", maxMarks: 15 }
  // ]
  //         }

  //       }


  // ============================================================================
  //  INSTRUCTIONS FOR ADDING A NEW BATCH
  //  1. Copy the entire block below (starting from { id: 'batch-2024-2027', ... }).
  //  2. Paste it at the top or bottom of the BATCHES array.
  //  3. Update the 'id' (must be unique) and 'label'.
  //  4. Define the 'semesters' relevant for that batch (e.g., Semester 3, 4).
  //  5. Update the Sheet IDs and Subject Configs for that specific batch.
  // ============================================================================

  // --------------------------------------------------------------------------
  // BATCH 2: 2024 - 2027 (2nd Year) - DUMMY DATA EXAMPLE
  // --------------------------------------------------------------------------
  {
    id: 'batch-2024-2028',
    label: 'Batch 2024 - 2028 (2nd Year)',
    semesters: {
      "1": { 
        label: "Semester 4", 
        internals: ["IP1", "IP2"],
        
        // Reward Sheets for 2nd Year (using dummy IDs from 1st year for demo)
        rewardSheets: {
          "IP1": { id: "1KJXzVhNVbrz9_2CuKS5-px-NmKVTMCFPF09TuZRMogg", name: "AVS_2024-2028_All_S4_IP1_RewardSplit" }
          // "IP2": { id: "1cJc1Vc2PSR4jUnjzHA", name: "RCS_1styear_IP2_RewardsSplit" }
        },
        
        // Internal Marks for 2nd Year
        internalMarksSheets: {
          IP1: {
            "MECH": { id: "14A33H7s8SNZgjRnfvgESCrAzK6K7R-4puQbaAlgQTzw", name: "MECH" },
            "BME": { id: "1ydFoERh8XFsQOU2Qi6eV_FdRsdsc3d0z8jI50bF1dFo", name: "BME" },
            "CIVIL": { id: "1FyFi84YSKHGHHxBE0rEd_LhCJWeNcwXj3VXSd3QK-SI", name: "CIVIL" },
            "AI&DS": { id: "1Sr-cXu0NObfhD_AtKAjk0cdLIMZah1WvD6QAoVRCGLE", name: "AI&DS" },
            "CSE": { id: "1b0yCrYskT01B8a1uIyDIAc6AWqILV-0m5e846RENtrs", name: "CSE" },
            "ECE": { id: "117ObwLKacCAweRJc-cW8bGDXKyvvT8vPnW58ypklg4M", name: "ECE" },
            "EEE": { id: "1ExmZQk28k0jsl8lH6IRBSOXkCFuKANCcI-OPPu6q28I", name: "EEE" },
            "IT": { id: "1nj1h-G64fqSkVd4Lr7W9IgOnqWYyplUbXjcyjaAVJ4U", name: "IT" },
            "AI&ML": { id: "1MmP_uwNpzLQdcefau2Gi90H6TunIb91QAJfLtv-znzM", name: "AI&ML" }
          }
        },

        // Subjects for 2nd Year, Semester 3
        subjectConfig: {
          defaultMaxMarks: {
            Theory: 20,
            Lab: 20,
            "Lab+Theory": 20
          },
          departments: {
            "B.Sc CS": [
              { code: "24BCS301", type: "Theory", maxMarks: 50 },
              { code: "24BCS302", type: "Lab", maxMarks: 50 },
              { code: "24BCS303", type: "Lab + Theory", maxMarks: 100 }
            ],
            "B.Sc IT": [
              { code: "24BIT301", type: "Theory", maxMarks: 50 },
              { code: "24BIT302", type: "Lab", maxMarks: 50 }
            ]
          }
        }
      }
    }
  }
];

export const CATEGORY_CODES = ['CD', 'PCDP', 'SM', 'AC', 'RPA', 'SPL', 'OT'];
export const SYSTEM_HEADER_LABELS = ["email address", "name", "register no", "department", "total"];
