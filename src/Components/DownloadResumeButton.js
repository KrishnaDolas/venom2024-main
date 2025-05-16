import React from 'react';

function DownloadResumeButton() {
  const handleDownload = () => {
    
    const resumeUrl = '/path/to/your_resume_filename.pdf';
    
   
    const link = document.createElement('a');
    
   
    link.href = resumeUrl;
    
   
    link.download = 'your_resume_filename.pdf';
    
    
    document.body.appendChild(link);
    
   
    link.click();
    
    
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload}>
      Download Resume
    </button>
  );
}

export default DownloadResumeButton;
