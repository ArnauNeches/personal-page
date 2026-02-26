import { supabase } from "./supabaseClient.js";



async function handleCVDownload(e) {
    e.preventDefault();
    const cvUrl = e.currentTarget.href;

    const { error } = await supabase.from('cv_downloads').insert([{ 
        user_agent: navigator.userAgent,
        referrer: document.referrer
    }]);

    if (error) {
        console.error("Error downloading cv: ", error);
    }

    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Arnau_Neches_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

export function CVDownload(){
    const cvLink = document.getElementById("cv-download-link");
    if (cvLink) {
        cvLink.addEventListener("click", handleCVDownload);
    }
}