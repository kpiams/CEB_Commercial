     let quota_info = ` 
[
    {"quota_id": "PR-BAG", "Dest": "BAG", "Airline": "PR", "Quota": 5, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "DG-BCD", "Dest": "BCD", "Airline": "DG", "Quota": 21, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "PR-BCD", "Dest": "BCD", "Airline": "PR", "Quota": 17, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "PR-BKK", "Dest": "BKK", "Airline": "PR", "Quota": 8, "int_dom": "International", "period_id": "2024-Q1"},
    {"quota_id": "PR-BPA", "Dest": "BPA", "Airline": "PR", "Quota": 2, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "DG-BXU", "Dest": "BXU", "Airline": "DG", "Quota": 21, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "PR-BXU", "Dest": "BXU", "Airline": "PR", "Quota": 8, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "PR-CBO", "Dest": "CBO", "Airline": "PR", "Quota": 2, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "DG-CGM", "Dest": "CGM", "Airline": "DG", "Quota": 8, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "5J-CGY", "Dest": "CGY", "Airline": "5J", "Quota": 19, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "DG-CGY", "Dest": "CGY", "Airline": "DG", "Quota": 29, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "PR-CGY", "Dest": "CGY", "Airline": "PR", "Quota": 25, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "5J-CRK", "Dest": "CRK", "Airline": "5J", "Quota": 49, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "PR-CRK", "Dest": "CRK", "Airline": "PR", "Quota": 8, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "DG-CYP", "Dest": "CYP", "Airline": "DG", "Quota": 5, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "DG-DGT", "Dest": "DGT", "Airline": "DG", "Quota": 16, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "QR-DOH", "Dest": "DOH", "Airline": "QR", "Quota": 14, "int_dom": "International", "period_id": "2024-Q1"},
    {"quota_id": "DG-DPL", "Dest": "DPL", "Airline": "DG", "Quota": 8, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "DG-DRP", "Dest": "DRP", "Airline": "DG", "Quota": 11, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "PR-DRP", "Dest": "DRP", "Airline": "PR", "Quota": 8, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "5J-DVO", "Dest": "DVO", "Airline": "5J", "Quota": 25, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "DG-DVO", "Dest": "DVO", "Airline": "DG", "Quota": 24, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "PR-DVO", "Dest": "DVO", "Airline": "PR", "Quota": 46, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "Z2-DVO", "Dest": "DVO", "Airline": "Z2", "Quota": 19, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "EK-DXB", "Dest": "DXB", "Airline": "EK", "Quota": 23, "int_dom": "International", "period_id": "2024-Q1"},
    {"quota_id": "T6-ENI", "Dest": "ENI", "Airline": "T6", "Quota": 5, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "5J-GES", "Dest": "GES", "Airline": "5J", "Quota": 11, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "5J-HKG", "Dest": "HKG", "Airline": "5J", "Quota": 33, "int_dom": "International", "period_id": "2024-Q1"},
    {"quota_id": "CX-HKG", "Dest": "HKG", "Airline": "CX", "Quota": 29, "int_dom": "International", "period_id": "2024-Q1"},
    {"quota_id": "DG-IAO", "Dest": "IAO", "Airline": "DG", "Quota": 24, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "PR-IAO", "Dest": "IAO", "Airline": "PR", "Quota": 17, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "5J-ICN", "Dest": "ICN", "Airline": "5J", "Quota": 17, "int_dom": "International", "period_id": "2024-Q1"},
    {"quota_id": "7C-ICN", "Dest": "ICN", "Airline": "7C", "Quota": 46, "int_dom": "International", "period_id": "2024-Q1"},
    {"quota_id": "KE-ICN", "Dest": "ICN", "Airline": "KE", "Quota": 32, "int_dom": "International", "period_id": "2024-Q1"},
    {"quota_id": "LJ-ICN", "Dest": "ICN", "Airline": "LJ", "Quota": 18, "int_dom": "International", "period_id": "2024-Q1"},
    {"quota_id": "OZ-ICN", "Dest": "ICN", "Airline": "OZ", "Quota": 19, "int_dom": "International", "period_id": "2024-Q1"},
    {"quota_id": "PR-ICN", "Dest": "ICN", "Airline": "PR", "Quota": 19, "int_dom": "International", "period_id": "2024-Q1"},
    {"quota_id": "TW-ICN", "Dest": "ICN", "Airline": "TW", "Quota": 18, "int_dom": "International", "period_id": "2024-Q1"},
    {"quota_id": "Z2-ICN", "Dest": "ICN", "Airline": "Z2", "Quota": 17, "int_dom": "International", "period_id": "2024-Q1"},
    {"quota_id": "5J-ILO", "Dest": "ILO", "Airline": "5J", "Quota": 8, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "DG-ILO", "Dest": "ILO", "Airline": "DG", "Quota": 27, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "PR-ILO", "Dest": "ILO", "Airline": "PR", "Quota": 20, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "TK-IST", "Dest": "IST", "Airline": "TK", "Quota": 23, "int_dom": "International", "period_id": "2024-Q1"},
    {"quota_id": "5J-MNL", "Dest": "MNL", "Airline": "5J", "Quota": 236, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "DG-MNL", "Dest": "MNL", "Airline": "DG", "Quota": 28, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "PR-MNL", "Dest": "MNL", "Airline": "PR", "Quota": 221, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "Z2-MNL", "Dest": "MNL", "Airline": "Z2", "Quota": 172, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "5J-MPH", "Dest": "MPH", "Airline": "5J", "Quota": 38, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "DG-MPH", "Dest": "MPH", "Airline": "DG", "Quota": 8, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "PR-MPH", "Dest": "MPH", "Airline": "PR", "Quota": 38, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "Z2-MPH", "Dest": "MPH", "Airline": "Z2", "Quota": 19, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "5J-NRT", "Dest": "NRT", "Airline": "5J", "Quota": 17, "int_dom": "International", "period_id": "2024-Q1"},
    {"quota_id": "PR-NRT", "Dest": "NRT", "Airline": "PR", "Quota": 19, "int_dom": "International", "period_id": "2024-Q1"},
    {"quota_id": "Z2-NRT", "Dest": "NRT", "Airline": "Z2", "Quota": 17, "int_dom": "International", "period_id": "2024-Q1"},
    {"quota_id": "DG-OZC", "Dest": "OZC", "Airline": "DG", "Quota": 16, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "PR-OZC", "Dest": "OZC", "Airline": "PR", "Quota": 4, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "DG-PAG", "Dest": "PAG", "Airline": "DG", "Quota": 13, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "5J-PPS", "Dest": "PPS", "Airline": "5J", "Quota": 38, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "Z2-PPS", "Dest": "PPS", "Airline": "Z2", "Quota": 19, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "PR-PSS", "Dest": "PSS", "Airline": "PR", "Quota": 8, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "LJ-PUS", "Dest": "PUS", "Airline": "LJ", "Quota": 18, "int_dom": "International", "period_id": "2024-Q1"},
    {"quota_id": "MU-PVG", "Dest": "PVG", "Airline": "MU", "Quota": 17, "int_dom": "International", "period_id": "2024-Q1"},
    {"quota_id": "5J-SIN", "Dest": "SIN", "Airline": "5J", "Quota": 10, "int_dom": "International", "period_id": "2024-Q1"},
    {"quota_id": "SQ-SIN", "Dest": "SIN", "Airline": "SQ", "Quota": 18, "int_dom": "International", "period_id": "2024-Q1"},
    {"quota_id": "TR-SIN", "Dest": "SIN", "Airline": "TR", "Quota": 20, "int_dom": "International", "period_id": "2024-Q1"},
    {"quota_id": "DG-SUG", "Dest": "SUG", "Airline": "DG", "Quota": 8, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "DG-TAC", "Dest": "TAC", "Airline": "DG", "Quota": 20, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "PR-TAC", "Dest": "TAC", "Airline": "PR", "Quota": 19, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "7C-TAE", "Dest": "TAE", "Airline": "7C", "Quota": 18, "int_dom": "International", "period_id": "2024-Q1"},
    {"quota_id": "BR-TPE", "Dest": "TPE", "Airline": "BR", "Quota": 29, "int_dom": "International", "period_id": "2024-Q1"},
    {"quota_id": "CI-TPE", "Dest": "TPE", "Airline": "CI", "Quota": 14, "int_dom": "International", "period_id": "2024-Q1"},
    {"quota_id": "JX-TPE", "Dest": "TPE", "Airline": "JX", "Quota": 18, "int_dom": "International", "period_id": "2024-Q1"},
    {"quota_id": "Z2-TPE", "Dest": "TPE", "Airline": "Z2", "Quota": 10, "int_dom": "International", "period_id": "2024-Q1"},
    {"quota_id": "DG-USU", "Dest": "USU", "Airline": "DG", "Quota": 12, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "PR-USU", "Dest": "USU", "Airline": "PR", "Quota": 17, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "DG-WNP", "Dest": "WNP", "Airline": "DG", "Quota": 5, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "5J-ZAM", "Dest": "ZAM", "Airline": "5J", "Quota": 19, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "DG-ZAM", "Dest": "ZAM", "Airline": "DG", "Quota": 5, "int_dom": "Domestic", "period_id": "2024-Q1"},
    {"quota_id": "PR-ZAM", "Dest": "ZAM", "Airline": "PR", "Quota": 8, "int_dom": "Domestic", "period_id": "2024-Q1"}
    
    

    
]    

 `;