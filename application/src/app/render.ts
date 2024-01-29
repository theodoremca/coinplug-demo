export const renderDataAsHTML =(data:Data, url:string) => {
  const html = `
        <!DOCTYPE html>
        <html>
        <head>
        <title>Company Data</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Young+Serif&display=swap" rel="stylesheet">
      <style>
      *{
          font-family: 'Young Serif', serif;
      }
      
      </style>
      <body class="bg-gray-100">
      <h1 class="text-3xl font-semibold text-center p-4">${url}</h1>
      <h2 class="text-xl font-semibold p-2">Headers</h2>
      <ul class="list-disc pl-8">
          ${data?.headers?.map((header) => `
              <li class="mb-2">
                  <strong class="font-semibold">${header.name}:</strong> <span class="text-gray-700">${header.count}</span>
              </li>
          `).join("")}
      </ul>
      <h2 class="text-xl font-semibold p-2">Reviews</h2>
      <ul class="list-disc pl-8">
          ${Object.entries(data.reviews).map(([key, value]) => `
              <li class="mb-2">
                  <strong class="font-semibold">${key}:</strong> <span class="text-gray-700">${value}</span>
              </li>
          `).join("")}
      </ul>
  </body>
  
        </html>
    `;

  return html;
};

export interface Data {
    headers: Header[];
    reviews: Reviews;
}

export interface Header {
    name: string;
    count: string;
}

export interface Reviews {
    star: string;
    recommendation: string;
    approval: string;
    ceoRating: string;
    ceoName: string;
    ceoPicture: string;
}
