import React from 'react';
import ReactDOM from 'react-dom/client';

const rootForReact = ReactDOM.createRoot(document.getElementById('root'));

const handleClick = async () => {
  console.log('Webflow object is', webflow); // *Should* log the Webflow object, complete with createDOM
  const element = await webflow.getSelectedElement();
  console.log('element is', element); // Logs the selected element
  const newEl = webflow.createDOM("p"); // Errors because there's no webflow.createDOM
}

rootForReact.render(
  <React.StrictMode>
<button onClick={handleClick}>Insert DOM Element</button>
  </React.StrictMode>
);