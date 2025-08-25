// src/templates/pdfTemplates.ts
export const createHeaderTemplate = (escapedTitle: string): string => `
  <style>
    .pdf-header {
      box-sizing: border-box;
      width: 100%;
      font-size: 10px;
      padding: 10px 20px;
      margin: 0;
      background: #f8f9fa;
      border-bottom: 1px solid #e9ecef;
      text-align: center; /* centers content inside the header */
    }
    .pdf-header__title {
      font-weight: bold;
      color: #212529;
      display: inline-block; /* keeps the text centered nicely */
    }
  </style>
  <div class="pdf-header">
    <div class="pdf-header__title">${escapedTitle}</div>
  </div>
`;

export const createFooterTemplate = (generationDate: string): string => `
  <style>
    .pdf-footer {
      box-sizing: border-box; width: 100%; font-size: 9px;
      padding: 10px 20px; margin: 0; display: flex;
      justify-content: space-between; align-items: center;
      background: #f8f9fa; border-top: 1px solid #e9ecef;
      color: #6c757d;
    }
  </style>
  <div class="pdf-footer">
    <div>Generated on ${generationDate}</div>
    <div>Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>
  </div>
`;
