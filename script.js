// --- TAILWIND CONFIGURATION ---
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                glass: {
                    100: 'rgba(255, 255, 255, 0.1)',
                    200: 'rgba(255, 255, 255, 0.2)',
                    border: 'rgba(255, 255, 255, 0.15)',
                    text: 'rgba(255, 255, 255, 0.9)',
                    textMuted: 'rgba(255, 255, 255, 0.6)',
                },
                industrial: {
                    accent: '#38bdf8', // Cyan
                    highlight: '#6366f1', // Indigo
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
                serif: ['Cinzel', 'serif'],
            },
            animation: {
                'blob': 'blob 7s infinite',
                'flow': 'flow 15s ease infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                flow: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        }
    }
};

// --- PDF.JS WORKER CONFIG ---
// Set worker source for PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';


// --- MAIN LOGIC ---

// Initialize Lucide Icons
if (typeof lucide !== 'undefined') {
    lucide.createIcons();
}

// ============================================
// --- CONFIGURATION & DATA SECTION ---
// (Update this section to change content)
// ============================================

// --- PROJECTS DATA ---
const myProjects = [
    {
        title: "Iphone 14 Pro Max Model",
        description: "Designed an Iphone 14 pro max model.",
        tags: ["3D Modeling"],
        icon: "settings",
        // Corrected URL to use githack for proper mime-type serving
        model: "https://raw.githack.com/Sawon76/3d_Portfolio/main/models/Iphone_14_pro_max.gltf",
        borderColor: "#38bdf8", 
        gradient: "linear-gradient(145deg, #38bdf8, #000)"
    },
    {
        title: "Mouse Model-1",
        description: "Prototype of a mouse",
        tags: ["3D Modeling"],
        icon: "cylinder",
        model: "https://raw.githack.com/Sawon76/3d_Portfolio/main/models/Mouse_2.gltf",
        borderColor: "#6366f1",
        gradient: "linear-gradient(145deg, #6366f1, #000)"
    },
    {
        title: "Train Engine",
        description: "Train Engine Model",
        tags: ["3D Modeling"],
        icon: "wrench",
        model: "https://raw.githack.com/Sawon76/3d_Portfolio/main/models/Train.gltf",
        borderColor: "#10b981",
        gradient: "linear-gradient(145deg, #10b981, #000)"
    },
    {
        title: "Mouse Model-2",
        description: "Prototype of a mouse",
        tags: ["3D Modeling"],
        icon: "wrench",
        model: "https://raw.githack.com/Sawon76/3d_Portfolio/main/models/Mouse_3.gltf",
        borderColor: "#10b981",
        gradient: "linear-gradient(145deg, #10b981, #000)"
    },
    {
        title: "Tea Pot",
        description: "Tea Pot Model",
        tags: ["3D Modeling | Surfacing"],
        icon: "wrench",
        model: "https://raw.githack.com/Sawon76/3d_Portfolio/main/models/Surface.gltf",
        borderColor: "#10b981",
        gradient: "linear-gradient(145deg, #10b981, #000)"
    },
];

// --- CERTIFICATIONS DATA ---
const myCertifications = [
    {
        icon: "award",
        title: "CSWA - Certified Associate",
        subtitle: "Dassault Systèmes",
        handle: "ID: C-123456789",
        borderColor: "#38bdf8", // Cyan
        gradient: "linear-gradient(145deg, #38bdf8, #000)",
        // Changed to a raw.githack link to demonstrate the PDF.js viewer. 
        // Real Google Drive links will still fallback to iframe.
        url: "https://raw.githack.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf" 
    },
    {
        icon: "shield-check",
        title: "SOLIDWORKS : For Students, Engineers, and Designers",
        subtitle: "By UDEMY",
        handle: "Completed",
        borderColor: "#6366f1", // Indigo
        gradient: "linear-gradient(180deg, #6366f1, #000)",
        url: "https://raw.githack.com/Sawon76/3d_Portfolio/22aa5b25edd6af2bda674da409544cf4d7362004/Certificates/udemy%20solidworks%20certificate.pdf"
    },
    {
        icon: "file-badge",
        title: "AutoCAD Professional",
        subtitle: "Autodesk",
        handle: "Active",
        borderColor: "#3b82f6", // Blue
        gradient: "linear-gradient(145deg, #3b82f6, #000)",
        url: "https://raw.githack.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf"
    },
    {
        icon: "book-open",
        title: "Supply Chain Management",
        subtitle: "University Honors",
        handle: "Completed",
        borderColor: "#10b981", // Emerald
        gradient: "linear-gradient(145deg, #10b981, #000)",
        url: "https://raw.githack.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf"
    }
];

// --- ACHIEVEMENTS DATA ---
// Note: Set 'image' to null to auto-fetch from 'link'. 
// If auto-fetch fails (e.g. LinkedIn blocks bots), it falls back to a default placeholder.
const myAchievements = [
    {
        title: "Best Innovation Award",
        description: "Secured 1st place in the National Engineering Design Contest 2024.",
        image: null, // Set to null to test auto-fetch
        link: "https://www.nasa.gov/", // Example link that usually has good meta images
        icon: "trophy"
    },
    {
        title: "Hult Prize Finalist",
        description: "Regional finalist for sustainable business model pitching.",
        image: "https://images.unsplash.com/photo-1569512608383-207936a28292?auto=format&fit=crop&q=80&w=800", // Manual override
        link: "https://www.hultprize.org/",
        icon: "medal"
    },
    {
        title: "Robotics Competition",
        description: "Team lead for autonomous robot navigation challenge.",
        image: null, // Auto-fetch
        link: "https://github.com/", // Github usually fetches well
        icon: "cpu"
    }
];

// --- RESEARCH DATA ---
const myResearch = [
    {
        title: "Supply Chain Optimization",
        subtitle: "International Journal of Industrial Engineering",
        handle: "Published: 2024",
        url: "https://raw.githack.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf", // Placeholder PDF
        icon: "book-open"
    },
    {
        title: "Sustainable Manufacturing",
        subtitle: "Conference Paper on Green Tech",
        handle: "Under Review",
        url: "https://raw.githack.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf", // Placeholder PDF
        icon: "flask-conical"
    }
];

// ============================================
// --- END CONFIGURATION SECTION ---
// ============================================

// --- SECURITY: DISABLE DEVELOPER TOOLS & CONTEXT MENU ---
document.addEventListener('contextmenu', (e) => e.preventDefault());

document.onkeydown = function(e) {
    // F12
    if(e.keyCode == 123) {
        return false;
    }
    // Ctrl+Shift+I (Windows) / Cmd+Option+I (Mac)
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if(e.metaKey && e.altKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    // Ctrl+Shift+C (Windows) / Cmd+Option+C (Mac)
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if(e.metaKey && e.altKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    // Ctrl+Shift+J (Windows) / Cmd+Option+J (Mac)
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if(e.metaKey && e.altKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    // Ctrl+U (View Source)
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
    if(e.metaKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
    // Ctrl+S (Save Page)
    if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
        return false;
    }
    if(e.metaKey && e.keyCode == 'S'.charCodeAt(0)) {
        return false;
    }
}

// Toast Notification Function
function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    container.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// --- DOCK VISIBILITY HELPER ---
function toggleDock(show) {
    const dock = document.querySelector('.dock-container');
    if (dock) {
        dock.style.opacity = show ? '1' : '0';
        dock.style.pointerEvents = show ? 'auto' : 'none';
    }
}

// --- RESUME MODAL LOGIC ---
function openResumeModal() {
    document.getElementById('resume-modal').classList.remove('hidden');
    toggleDock(false);
}

function closeResumeModal() {
    document.getElementById('resume-modal').classList.add('hidden');
    toggleDock(true);
}

// 3D Viewer Logic
function open3DViewer(modelUrl, title) {
    const modal = document.getElementById('model-modal');
    const viewer = document.getElementById('main-viewer');
    const titleEl = document.querySelector('#model-title span');
    titleEl.textContent = title;
    viewer.src = modelUrl;
    modal.classList.remove('hidden');
    toggleDock(false);
}

function close3DViewer() {
    const modal = document.getElementById('model-modal');
    const viewer = document.getElementById('main-viewer');
    modal.classList.add('hidden');
    toggleDock(true);
    setTimeout(() => { viewer.src = ""; }, 300);
}

// --- PDF VIEWER LOGIC (Custom PDF.js Implementation) ---
let pdfDoc = null;
let pageNum = 1;
let pageRendering = false;
let pageNumPending = null;
const scale = 1.5;
const canvas = document.getElementById('pdf-canvas');
const ctx = canvas.getContext('2d');

function renderPage(num) {
    pageRendering = true;
    // Fetch page
    pdfDoc.getPage(num).then(function(page) {
        const viewport = page.getViewport({scale: scale});
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render PDF page into canvas context
        const renderContext = {
            canvasContext: ctx,
            viewport: viewport
        };
        const renderTask = page.render(renderContext);

        // Wait for render to finish
        renderTask.promise.then(function() {
            pageRendering = false;
            if (pageNumPending !== null) {
                renderPage(pageNumPending);
                pageNumPending = null;
            }
        });
    });

    // Update page counters
    document.getElementById('pdf-page-num').textContent = num;
}

function queueRenderPage(num) {
    if (pageRendering) {
        pageNumPending = num;
    } else {
        renderPage(num);
    }
}

function onPrevPage() {
    if (pageNum <= 1) {
        return;
    }
    pageNum--;
    queueRenderPage(pageNum);
}

function onNextPage() {
    if (pageNum >= pdfDoc.numPages) {
        return;
    }
    pageNum++;
    queueRenderPage(pageNum);
}

document.getElementById('pdf-prev').addEventListener('click', onPrevPage);
document.getElementById('pdf-next').addEventListener('click', onNextPage);

function openPdfViewer(url) {
    if (!url || url === '#' || url.includes('PASTE_YOUR')) {
        showToast("Please update the PDF link in the HTML code.");
        return;
    }

    const modal = document.getElementById('pdf-modal');
    const iframe = document.getElementById('pdf-frame');
    const canvas = document.getElementById('pdf-canvas');
    const controls = document.getElementById('pdf-controls');
    const loader = document.getElementById('pdf-loader');

    modal.classList.remove('hidden');
    toggleDock(false);
    loader.classList.remove('hidden');

    // Check if Google Drive Link (Fallback to iframe, implies controls exist)
    // OR if it's a direct PDF link (Use custom viewer)
    if (url.includes('drive.google.com')) {
        // Google Drive Logic (Fallback)
        // Convert view/preview links if needed
        let previewUrl = url;
        const idMatch = url.match(/\/d\/(.*?)\//);
        if (idMatch && idMatch[1]) {
            previewUrl = `https://drive.google.com/file/d/${idMatch[1]}/preview`;
        }
        
        canvas.classList.add('hidden');
        controls.classList.add('hidden');
        iframe.classList.remove('hidden');
        iframe.src = previewUrl;
        loader.classList.add('hidden'); // Iframe handles its own loading UI mostly
    } else {
        // Direct PDF Logic (Custom Viewer)
        iframe.classList.add('hidden');
        canvas.classList.remove('hidden');
        controls.classList.remove('hidden');

        // Load PDF
        pdfjsLib.getDocument(url).promise.then(function(pdfDoc_) {
            pdfDoc = pdfDoc_;
            document.getElementById('pdf-page-count').textContent = pdfDoc.numPages;
            pageNum = 1;
            renderPage(pageNum);
            loader.classList.add('hidden');
        }).catch(function(error) {
            console.error('Error loading PDF:', error);
            showToast("Error loading PDF. Check CORS settings or URL.");
            loader.classList.add('hidden');
        });
    }
}

function closePdfViewer() {
    const modal = document.getElementById('pdf-modal');
    const iframe = document.getElementById('pdf-frame');
    const canvas = document.getElementById('pdf-canvas');
    const ctx = canvas.getContext('2d');
    
    modal.classList.add('hidden');
    toggleDock(true);
    
    // Cleanup
    setTimeout(() => { 
        iframe.src = ""; 
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if(pdfDoc) {
            pdfDoc.destroy();
            pdfDoc = null;
        }
    }, 300); 
}

// --- PAGINATION STATE ---
let projectsLimit = 3;
let certsLimit = 3;
let achievementsLimit = 3; // NEW state variable
let researchLimit = 3;     // NEW state variable
const ITEMS_PER_PAGE = 3;

// --- NEW 3D CARD RENDER LOGIC ---
function renderProjects() {
    const container = document.getElementById('projects-grid');
    if (!container) return;

    // Using standard grid layout
    container.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';

    // Slice data based on limit
    const visibleProjects = myProjects.slice(0, projectsLimit);

    // Applying the user's requested 3D Card Style
    // Note: Replacing chroma-card with 3D card structure
    container.innerHTML = visibleProjects.map(project => `
        <div class="card-container-3d group/card relative h-auto w-full">
            <div 
                class="card-body-3d relative size-auto rounded-xl border border-white/20 bg-black p-6 hover:shadow-2xl hover:shadow-emerald-500/[0.1]"
            >
                <div class="card-item-3d" style="transform: translateZ(50px)">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="p-2 bg-white/10 rounded-lg border border-white/10">
                            <i data-lucide="${project.icon}" class="w-6 h-6 text-white"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white">
                            ${project.title}
                        </h3>
                    </div>
                </div>
                
                <div class="card-item-3d mt-2 max-w-sm text-sm text-neutral-300" style="transform: translateZ(60px)">
                    <p>${project.description}</p>
                </div>
                
                <div class="card-item-3d mt-6 w-full" style="transform: translateZ(80px)">
                    <div class="h-48 w-full rounded-xl bg-gradient-to-br from-gray-900 to-black border border-white/10 flex items-center justify-center group-hover/card:shadow-xl overflow-hidden pointer-events-none">
                        <model-viewer 
                            src="${project.model}" 
                            auto-rotate 
                            camera-controls
                            disable-zoom
                            style="width: 100%; height: 100%;"
                            exposure="0.5"
                        ></model-viewer>
                    </div>
                </div>
                
                <div class="mt-10 flex items-center justify-between">
                    <div class="card-item-3d flex flex-wrap gap-2" style="transform: translateZ(60px)">
                        ${project.tags.map(tag => `<span class="text-[10px] bg-white/10 px-2 py-1 rounded-full border border-white/5 text-white">${tag}</span>`).join('')}
                    </div>
                    
                    <div class="card-item-3d" style="transform: translateZ(120px)">
                        <button 
                            onclick="open3DViewer('${project.model}', '${project.title}')"
                            class="rounded-xl bg-white px-4 py-2 text-xs font-bold text-black hover:bg-gray-200 transition-colors pointer-events-auto relative z-50"
                        >
                            View 3D
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Add Show More / Show Less Button
    const btnContainer = document.createElement('div');
    btnContainer.className = 'col-span-1 md:col-span-2 lg:col-span-3 flex justify-center mt-8';

    if (projectsLimit < myProjects.length) {
        // SHOW MORE state
        btnContainer.innerHTML = `
            <button id="load-more-projects" class="group relative px-6 py-2 md:px-8 md:py-3 overflow-hidden rounded-full bg-transparent border border-white/30 text-white transition-all hover:border-industrial-accent hover:text-industrial-accent cursor-pointer">
                <span class="absolute top-0 left-0 w-full h-full bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                <span class="relative text-xs md:text-sm font-medium tracking-widest uppercase flex items-center">
                    Show more <i data-lucide="arrow-down" class="ml-2 w-3 h-3 md:w-4 md:h-4"></i>
                </span>
            </button>
        `;
        container.appendChild(btnContainer);
        
        document.getElementById('load-more-projects').addEventListener('click', () => {
            projectsLimit += ITEMS_PER_PAGE;
            renderProjects();
        });
    } else if (myProjects.length > ITEMS_PER_PAGE) {
        // SHOW LESS state (only if we have expanded beyond initial count)
        btnContainer.innerHTML = `
            <button id="show-less-projects" class="group relative px-6 py-2 md:px-8 md:py-3 overflow-hidden rounded-full bg-transparent border border-white/30 text-white transition-all hover:border-industrial-accent hover:text-industrial-accent cursor-pointer">
                <span class="absolute top-0 left-0 w-full h-full bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                <span class="relative text-xs md:text-sm font-medium tracking-widest uppercase flex items-center">
                    Show less <i data-lucide="arrow-up" class="ml-2 w-3 h-3 md:w-4 md:h-4"></i>
                </span>
            </button>
        `;
        container.appendChild(btnContainer);

        document.getElementById('show-less-projects').addEventListener('click', () => {
            projectsLimit = ITEMS_PER_PAGE;
            renderProjects();
            // Optional: scroll to top of section
            // document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (typeof lucide !== 'undefined') lucide.createIcons();
    init3DCards(); // Initialize event listeners for 3D effect
}

// --- CHROMA GRID IMPLEMENTATION (Vanilla JS) ---
function initChromaGrid() {
    const container = document.getElementById('chroma-container');
    if(!container) return;
    
    // Using standard grid layout to match new style
    container.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';
    
    // Slice data based on limit
    const visibleCerts = myCertifications.slice(0, certsLimit);
    
    // 1. Render Cards with 3D Style
    container.innerHTML = visibleCerts.map(c => `
        <div class="card-container-3d group/card relative h-auto w-full">
            <div 
                class="card-body-3d relative size-auto rounded-xl border border-white/20 bg-black p-6 hover:shadow-2xl hover:shadow-emerald-500/[0.1]"
            >
                <div class="card-item-3d" style="transform: translateZ(50px)">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="p-2 bg-white/10 rounded-lg border border-white/10">
                            <i data-lucide="${c.icon}" class="w-6 h-6 text-white"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white">
                            ${c.title}
                        </h3>
                    </div>
                </div>
                
                <div class="card-item-3d mt-2 text-sm text-neutral-300" style="transform: translateZ(60px)">
                    <p>${c.subtitle}</p>
                </div>
                
                <div class="mt-10 flex items-center justify-between">
                    <div class="card-item-3d" style="transform: translateZ(20px)">
                        <span class="text-xs font-mono text-gray-400">${c.handle}</span>
                    </div>
                    
                    <div class="card-item-3d" style="transform: translateZ(100px)">
                        <button 
                            onclick="openPdfViewer('${c.url}')"
                            class="rounded-xl bg-white px-4 py-2 text-xs font-bold text-black hover:bg-gray-200 transition-colors pointer-events-auto relative z-50"
                        >
                            Show
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Add Show More / Show Less Button
    const btnContainer = document.createElement('div');
    btnContainer.className = 'col-span-1 md:col-span-2 lg:col-span-3 flex justify-center mt-8';

    if (certsLimit < myCertifications.length) {
        // SHOW MORE
        btnContainer.innerHTML = `
            <button id="load-more-certs" class="group relative px-6 py-2 md:px-8 md:py-3 overflow-hidden rounded-full bg-transparent border border-white/30 text-white transition-all hover:border-industrial-accent hover:text-industrial-accent cursor-pointer">
                <span class="absolute top-0 left-0 w-full h-full bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                <span class="relative text-xs md:text-sm font-medium tracking-widest uppercase flex items-center">
                    Show more <i data-lucide="arrow-down" class="ml-2 w-3 h-3 md:w-4 md:h-4"></i>
                </span>
            </button>
        `;
        container.appendChild(btnContainer);
        
        document.getElementById('load-more-certs').addEventListener('click', () => {
            certsLimit += ITEMS_PER_PAGE;
            initChromaGrid();
        });
    } else if (myCertifications.length > ITEMS_PER_PAGE) {
        // SHOW LESS
        btnContainer.innerHTML = `
            <button id="show-less-certs" class="group relative px-6 py-2 md:px-8 md:py-3 overflow-hidden rounded-full bg-transparent border border-white/30 text-white transition-all hover:border-industrial-accent hover:text-industrial-accent cursor-pointer">
                <span class="absolute top-0 left-0 w-full h-full bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                <span class="relative text-xs md:text-sm font-medium tracking-widest uppercase flex items-center">
                    Show less <i data-lucide="arrow-up" class="ml-2 w-3 h-3 md:w-4 md:h-4"></i>
                </span>
            </button>
        `;
        container.appendChild(btnContainer);

        document.getElementById('show-less-certs').addEventListener('click', () => {
            certsLimit = ITEMS_PER_PAGE;
            initChromaGrid();
        });
    }
    
    // Re-init icons for new content
    if (typeof lucide !== 'undefined') lucide.createIcons();
    init3DCards(); // Initialize event listeners for 3D effect
}

// --- 3D CARD LOGIC (Vanilla JS Port) ---
function init3DCards() {
    const containers = document.querySelectorAll('.card-container-3d');
    
    containers.forEach(container => {
        const body = container.querySelector('.card-body-3d');
        
        container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            const xPct = mouseX / width - 0.5;
            const yPct = mouseY / height - 0.5;
            
            const x = (yPct * 20); // Rotate X based on Y position
            const y = (xPct * -20); // Rotate Y based on X position
            
            body.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
        });
        
        container.addEventListener('mouseenter', () => {
            body.style.transition = 'none';
        });
        
        container.addEventListener('mouseleave', () => {
            body.style.transition = 'transform 0.5s ease';
            body.style.transform = `rotateX(0deg) rotateY(0deg)`;
        });
    });
}

// --- DOCK PHYSICS LOGIC ---
function initDock() {
    const dockItems = document.querySelectorAll('.dock-item');
    const dockPanel = document.querySelector('.dock-panel');

    if (!dockPanel) return;

    // --- SOUND ENGINE SETUP ---
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();

    const playSound = (type) => {
        // Browser policy requires user interaction to start audio context
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }

        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        const now = audioCtx.currentTime;

        if (type === 'hover') {
            // Subtle "Tick" sound for hover
            osc.type = 'sine';
            osc.frequency.setValueAtTime(600, now);
            osc.frequency.exponentialRampToValueAtTime(300, now + 0.03);
            
            gainNode.gain.setValueAtTime(0.03, now); // Very quiet
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
            
            osc.start(now);
            osc.stop(now + 0.03);
        }
    };

    const baseSize = 40; // px
    const maxScale = 1.5; // Magnification factor
    const range = 150; // px radius for effect

    // Mouse Move (Magnification)
    dockPanel.addEventListener('mousemove', (e) => {
        // Detect orientation based on screen width (matches CSS media query)
        const isVertical = window.innerWidth > 640;
        
        // Use Y axis for vertical dock, X axis for horizontal dock
        const mousePos = isVertical ? e.clientY : e.clientX;
        
        dockItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            
            // Calculate center based on orientation
            const center = isVertical 
                ? rect.top + rect.height / 2 
                : rect.left + rect.width / 2;
                
            const distance = Math.abs(mousePos - center);
            
            let scale = 1;
            if (distance < range) {
                // Calculate scale based on sine curve for smooth falloff
                const val = 1 - distance / range;
                scale = 1 + (maxScale - 1) * Math.sin(val * Math.PI / 2);
            }
            
            item.style.width = `${baseSize * scale}px`;
            item.style.height = `${baseSize * scale}px`;
        });
    });

    // Mouse Leave (Reset)
    dockPanel.addEventListener('mouseleave', () => {
        dockItems.forEach(item => {
            item.style.width = `${baseSize}px`;
            item.style.height = `${baseSize}px`;
        });
    });

    // Attach Sound Events (Hover only)
    dockItems.forEach(item => {
        item.addEventListener('mouseenter', () => playSound('hover'));
    });
}

// --- LIQUID GLASS EFFECT LOGIC (PORTED FROM VUE) ---
function initLiquidGlass() {
    const dockPanel = document.querySelector('.dock-panel');
    const filterImage = document.querySelector('#liquid-displacement-image'); // The feImage element

    if (!dockPanel || !filterImage) return;

    const updateFilter = () => {
        const rect = dockPanel.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const radius = 24; // Must match CSS border-radius
        const border = Math.min(width, height) * 0.035; // approx prop.border (0.07) * 0.5 from Vue code

        // Construct SVG String (The "Map")
        // This mimics the 'displacementImage' computed property from the Vue code
        // It creates a black rect, then a red/blue gradient rect, then an inner rect with blur
        const svg = `
        <svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="red" x1="100%" y1="0%" x2="0%" y2="0%">
                    <stop offset="0%" stop-color="#0000"/>
                    <stop offset="100%" stop-color="red"/>
                </linearGradient>
                <linearGradient id="blue" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#0000"/>
                    <stop offset="100%" stop-color="blue"/>
                </linearGradient>
            </defs>
            <rect x="0" y="0" width="${width}" height="${height}" fill="black"></rect>
            <rect x="0" y="0" width="${width}" height="${height}" rx="${radius}" fill="url(#red)" />
            <rect x="0" y="0" width="${width}" height="${height}" rx="${radius}" fill="url(#blue)" style="mix-blend-mode: difference" />
            <rect 
                x="${border}" 
                y="${border}" 
                width="${width - border * 2}" 
                height="${height - border * 2}" 
                rx="${radius}" 
                fill="rgba(255,255,255,0.93)" 
                style="filter:blur(11px)" 
            />
        </svg>`;

        // Encode and set as href
        // Use robust replacement to remove newlines for data URI
        const encoded = encodeURIComponent(svg.replace(/\s+/g, " ")); 
        filterImage.setAttribute('href', `data:image/svg+xml,${encoded}`);
    };

    // Initialize Observer to update map when dock resizes (on hover physics)
    const observer = new ResizeObserver(updateFilter);
    observer.observe(dockPanel);
    
    // Initial call
    updateFilter();
}

// --- SILK SHADER BACKGROUND (Vanilla Three.js) ---
function initSilkShader() {
    const container = document.getElementById('shader-background');
    if (!container) return;

    // SHADER CODE FROM USER
    const fragmentShader = `
        #define INVERT 1

        uniform float iTime;
        uniform vec3  iResolution;
        uniform vec4  iMouse;

        float noise(vec2 p) {
            return smoothstep(-0.5, 0.9, sin((p.x - p.y) * 555.0) * sin(p.y * 1444.0)) - 0.4;
        }

        float fabric(vec2 p) {
            const mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
            float f = 0.4 * noise(p);
            f += 0.3 * noise(p = m * p);
            f += 0.2 * noise(p = m * p);
            return f + 0.1 * noise(m * p);
        }

        float silk(vec2 uv, float t) {
            float s = sin(5.0 * (uv.x + uv.y + cos(2.0 * uv.x + 5.0 * uv.y)) + sin(12.0 * (uv.x + uv.y)) - t);
            s = 0.7 + 0.3 * (s * s * 0.5 + s);
            s *= 0.9 + 0.6 * fabric(uv * min(iResolution.x, iResolution.y) * 0.0006);
            return s * 0.9 + 0.1;
        }

        float silkd(vec2 uv, float t) {
            float xy = uv.x + uv.y;
            float d = (5.0 * (1.0 - 2.0 * sin(2.0 * uv.x + 5.0 * uv.y)) + 12.0 * cos(12.0 * xy)) * cos(5.0 * (cos(2.0 * uv.x + 5.0 * uv.y) + xy) + sin(12.0 * xy) - t);
            return 0.005 * d * (sign(d) + 3.0);
        }

        void mainImage(out vec4 fragColor, vec2 fragCoord) {
            float mr = min(iResolution.x, iResolution.y);
            vec2 uv = fragCoord / mr;

            float t = iTime;
            uv.y += 0.03 * sin(8.0 * uv.x - t);

            if (iMouse.z > 1.0)
                uv += smoothstep(0.5, 0.0, distance(iMouse.xy / mr, uv)) * 0.08;
            
            float s = sqrt(silk(uv, t));
            float d = silkd(uv, t);

            vec3 c = vec3(s);
            c += 0.7 * vec3(1, 0.83, 0.6) * d;
            c *= 1.0 - max(0.0, 0.8 * d);
            
            #if INVERT
                c = pow(c, 0.3 / vec3(0.52, 0.5, 0.4));
                c = 1.0 - c;
            #else
                c = pow(c, vec3(0.52, 0.5, 0.4));
            #endif

            fragColor = vec4(c, 1);
        }

        void main() {
            mainImage(gl_FragColor, gl_FragCoord.xy);
        }
    `;

    const vertexShader = `
        void main() {
            gl_Position = vec4( position, 1.0 );
        }
    `;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );

    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Allow transparency
    renderer.setSize( container.clientWidth, container.clientHeight );
    container.appendChild( renderer.domElement );

    const uniforms = {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector3(container.clientWidth, container.clientHeight, 1) },
        iMouse: { value: new THREE.Vector4() } // xy = current, zw = click
    };

    const material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader
    });

    const geometry = new THREE.PlaneGeometry( 2, 2 );
    const mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    const startTime = Date.now();

    function animate() {
        requestAnimationFrame( animate );
        uniforms.iTime.value = (Date.now() - startTime) * 0.001;
        renderer.render( scene, camera );
    }

    animate();

    // Handle Resize
    window.addEventListener( 'resize', onWindowResize, false );
    function onWindowResize() {
        renderer.setSize( container.clientWidth, container.clientHeight );
        uniforms.iResolution.value.set( container.clientWidth, container.clientHeight, 1 );
    }

    // Handle Mouse Interactions for the Shader
    let isMouseDown = false;
    
    document.addEventListener('mousemove', (e) => {
        const rect = renderer.domElement.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = container.clientHeight - (e.clientY - rect.top); // Flip Y for shader coords
        
        if(isMouseDown) {
            uniforms.iMouse.value.x = x;
            uniforms.iMouse.value.y = y;
        }
    });

    document.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        const rect = renderer.domElement.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = container.clientHeight - (e.clientY - rect.top);
        
        uniforms.iMouse.value.x = x;
        uniforms.iMouse.value.y = y;
        uniforms.iMouse.value.z = x; // Click pos X
        uniforms.iMouse.value.w = y; // Click pos Y
    });

    document.addEventListener('mouseup', () => {
        isMouseDown = false;
        // In ShaderToy, z/w become negative to indicate release, but often just tracking click state is enough
        uniforms.iMouse.value.z = -Math.abs(uniforms.iMouse.value.z);
        uniforms.iMouse.value.w = -Math.abs(uniforms.iMouse.value.w);
    });
}

// --- TEXT PARTICLE EFFECT (Inspira Style) ---
function initTextParticles() {
    const canvas = document.getElementById('text-particle-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    
    // Configuration
    const particleSize = 1.5; // Size of dots
    const mouseRadius = 100; // Increased interaction radius
    const mouseForce = 20; // How hard they push away
    const returnSpeed = 0.015; // Decreased speed for smoother return (was 0.08)
    const friction = 0.95; // Increased friction for smoother damping (was 0.9)
    
    let mouse = { x: null, y: null };
    
    // Font settings
    const fontBaseSize = 100; // Base font size for calculation
    const fontFamily = "'Cinzel', serif";
    
    class Particle {
        constructor(x, y) {
            this.x = Math.random() * canvas.width; // Random start for effect
            this.y = Math.random() * canvas.height;
            this.baseX = x; // Target position (text shape)
            this.baseY = y;
            this.density = (Math.random() * 30) + 1;
            this.vx = 0;
            this.vy = 0;
        }
        
        draw() {
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(this.x, this.y, particleSize, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }
        
        update() {
            // Mouse Interaction
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            let maxDistance = mouseRadius;
            let force = (maxDistance - distance) / maxDistance;
            let directionX = forceDirectionX * force * this.density;
            let directionY = forceDirectionY * force * this.density;
            
            if (distance < mouseRadius) {
                // Push away
                this.vx -= directionX * 2; // Multiplier for punchiness
                this.vy -= directionY * 2;
            } else {
                // Return to base
                if (this.x !== this.baseX) {
                    let dx = this.x - this.baseX;
                    this.vx -= dx * returnSpeed; // Ease back
                }
                if (this.y !== this.baseY) {
                    let dy = this.y - this.baseY;
                    this.vy -= dy * returnSpeed;
                }
            }
            
            // Apply Velocity & Friction
            this.vx *= friction;
            this.vy *= friction;
            
            this.x += this.vx;
            this.y += this.vy;
        }
    }
    
    function init() {
        const container = document.getElementById('particle-text-container');
        if (!container) return;

        // Force integer values
        const w = Math.floor(container.offsetWidth);
        const h = Math.floor(container.offsetHeight);

        // Safety check for 0 dimensions (wait for layout)
        if (w === 0 || h === 0) {
            return requestAnimationFrame(init);
        }

        canvas.width = w;
        canvas.height = h;
        
        particles = [];
        
        // 2. Create Offscreen Canvas for Text Data
        const textCtx = document.createElement('canvas').getContext('2d');
        textCtx.canvas.width = w;
        textCtx.canvas.height = h;
        
        // 3. Draw Text on Offscreen Canvas
        // Dynamic Font Sizing Logic to fit container
        const isMobile = w < 768;
        let fontSize;

        if (isMobile) {
            // Stacked on Mobile: font size limited by width (longest word) or half height
            // "MUKHERJEE" is roughly 9 chars wide.
            // We want padding, so let's say width / 10 is roughly char width.
            fontSize = Math.min(h * 0.35, w * 0.13);
        } else {
            // Single Line on Desktop: limited by height or full width
            // "SAWON MUKHERJEE" is approx 15 chars.
            fontSize = Math.min(h * 0.6, w * 0.08); 
        }

        // Clamp values to reasonable limits
        fontSize = Math.max(30, Math.min(fontSize, 100));
        
        textCtx.font = `700 ${fontSize}px ${fontFamily}`;
        textCtx.fillStyle = 'white';
        textCtx.textAlign = 'center';
        textCtx.textBaseline = 'middle';
        
        const text1 = "SAWON";
        const text2 = "MUKHERJEE";
        
        if (isMobile) {
            // Stacked on Mobile
            const lineHeight = fontSize * 1.1;
            textCtx.fillText(text1, w / 2, h / 2 - lineHeight * 0.55);
            textCtx.fillText(text2, w / 2, h / 2 + lineHeight * 0.55);
        } else {
            // Single Line on Desktop
            textCtx.fillText(text1 + " " + text2, w / 2, h / 2);
        }
        
        // 4. Scan Pixel Data
        const textCoordinates = textCtx.getImageData(0, 0, w, h);
        
        // Optimization: Adjust step based on screen size/pixel density
        // Smaller step = clearer text but heavier performance
        const step = isMobile ? 2 : 3; 
        
        for (let y = 0; y < h; y += step) {
            for (let x = 0; x < w; x += step) {
                // Alpha channel check (> 128 means visible pixel)
                if (textCoordinates.data[(y * 4 * w) + (x * 4) + 3] > 128) {
                    particles.push(new Particle(x, y));
                }
            }
        }
    }
    
    function animate() {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Optional: Connect particles with lines if close (disabled for performance/clean look)
        // ...

        for (let i = 0; i < particles.length; i++) {
            particles[i].draw();
            particles[i].update();
        }
        animationId = requestAnimationFrame(animate);
    }
    
    // Mouse Handlers
    // Track mouse relative to canvas
    const container = document.getElementById('home'); // Use section for wider hit area
    
    container.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });
    
    container.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });
    
    // Resize Handler
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            cancelAnimationFrame(animationId);
            init();
            animate();
        }, 100);
    });
    
    // Wait for fonts to load before initializing
    document.fonts.ready.then(() => {
        init();
        animate();
    });
}

// --- NEW: RENDER ACHIEVEMENTS FUNCTION (WITH AUTO-FETCH & PAGINATION) ---
async function renderAchievements() {
    const container = document.getElementById('achievements-container');
    if (!container) return;

    // Using standard grid layout
    container.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';

    // Slice data based on limit
    const visibleAchievements = myAchievements.slice(0, achievementsLimit);

    // 1. Render Cards with Loading State or Manual Image
    container.innerHTML = visibleAchievements.map((item, index) => {
        // If image exists, use it. If not, use a placeholder/loader and add a special ID to fetch later.
        const hasManualImage = !!item.image;
        const imgId = `ach-img-${index}`;
        const loadingId = `ach-load-${index}`;
        const imgSrc = hasManualImage ? item.image : 'https://via.placeholder.com/800x400?text=Loading+Preview...'; // Temporary placeholder

        return `
        <div class="card-container-3d group/card relative h-auto w-full">
            <div class="card-body-3d relative size-auto rounded-xl border border-white/20 bg-black p-6 hover:shadow-2xl hover:shadow-cyan-500/[0.1]">
                <div class="card-item-3d" style="transform: translateZ(50px)">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="p-2 bg-white/10 rounded-lg border border-white/10">
                            <i data-lucide="${item.icon}" class="w-6 h-6 text-white"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white">${item.title}</h3>
                    </div>
                </div>
                
                <div class="card-item-3d mt-2 text-sm text-neutral-300" style="transform: translateZ(60px)">
                    <p>${item.description}</p>
                </div>
                
                <div class="card-item-3d mt-6 w-full" style="transform: translateZ(80px)">
                    <div class="h-48 w-full rounded-xl border border-white/10 overflow-hidden relative group-hover/card:shadow-xl bg-gray-900">
                        ${!hasManualImage ? `
                            <div id="${loadingId}" class="absolute inset-0 flex items-center justify-center bg-white/5 animate-pulse z-10">
                                <i data-lucide="loader-2" class="w-6 h-6 text-white animate-spin"></i>
                            </div>
                        ` : ''}
                        <img id="${imgId}" src="${imgSrc}" alt="${item.title}" class="w-full h-full object-cover transform transition-transform duration-500 group-hover/card:scale-110">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                </div>
                
                <div class="mt-10 flex items-center justify-end">
                    <div class="card-item-3d" style="transform: translateZ(100px)">
                        <a href="${item.link}" target="_blank" class="flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-bold text-black hover:bg-gray-200 transition-colors pointer-events-auto relative z-50">
                            View Details <i data-lucide="external-link" class="w-3 h-3"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `}).join('');

    // Add Show More / Show Less Button
    const btnContainer = document.createElement('div');
    btnContainer.className = 'col-span-1 md:col-span-2 lg:col-span-3 flex justify-center mt-8';

    if (achievementsLimit < myAchievements.length) {
        // SHOW MORE
        btnContainer.innerHTML = `
            <button id="load-more-achievements" class="group relative px-6 py-2 md:px-8 md:py-3 overflow-hidden rounded-full bg-transparent border border-white/30 text-white transition-all hover:border-industrial-accent hover:text-industrial-accent cursor-pointer">
                <span class="absolute top-0 left-0 w-full h-full bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                <span class="relative text-xs md:text-sm font-medium tracking-widest uppercase flex items-center">
                    Show more <i data-lucide="arrow-down" class="ml-2 w-3 h-3 md:w-4 md:h-4"></i>
                </span>
            </button>
        `;
        container.appendChild(btnContainer);
        
        document.getElementById('load-more-achievements').addEventListener('click', () => {
            achievementsLimit += ITEMS_PER_PAGE;
            renderAchievements();
        });
    } else if (myAchievements.length > ITEMS_PER_PAGE) {
        // SHOW LESS
        btnContainer.innerHTML = `
            <button id="show-less-achievements" class="group relative px-6 py-2 md:px-8 md:py-3 overflow-hidden rounded-full bg-transparent border border-white/30 text-white transition-all hover:border-industrial-accent hover:text-industrial-accent cursor-pointer">
                <span class="absolute top-0 left-0 w-full h-full bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                <span class="relative text-xs md:text-sm font-medium tracking-widest uppercase flex items-center">
                    Show less <i data-lucide="arrow-up" class="ml-2 w-3 h-3 md:w-4 md:h-4"></i>
                </span>
            </button>
        `;
        container.appendChild(btnContainer);

        document.getElementById('show-less-achievements').addEventListener('click', () => {
            achievementsLimit = ITEMS_PER_PAGE;
            renderAchievements();
        });
    }
    
    // Re-init icons immediately for the static content
    if (typeof lucide !== 'undefined') lucide.createIcons();
    init3DCards(); 

    // 2. Perform Async Fetch for missing images (Only for visible items)
    visibleAchievements.forEach(async (item, index) => {
        // We use the same index as the map function above because we sliced the array beforehand
        if (!item.image && item.link) {
            try {
                const imgEl = document.getElementById(`ach-img-${index}`);
                const loaderEl = document.getElementById(`ach-load-${index}`);
                
                // Skip if element not found (e.g. switched view rapidly)
                if (!imgEl) return;

                // Call Microlink API (Free Tier)
                const response = await fetch(`https://api.microlink.io/?url=${encodeURIComponent(item.link)}`);
                const data = await response.json();
                
                if (data.status === 'success' && data.data.image && data.data.image.url) {
                    imgEl.src = data.data.image.url;
                } else {
                    // Fallback if no image found
                    imgEl.src = 'https://via.placeholder.com/800x400/1e293b/ffffff?text=No+Preview+Available';
                }
                
                // Hide Loader
                if (loaderEl) loaderEl.style.display = 'none';
                
            } catch (error) {
                console.warn('Failed to fetch metadata for:', item.link);
                const imgEl = document.getElementById(`ach-img-${index}`);
                if(imgEl) imgEl.src = 'https://via.placeholder.com/800x400/1e293b/ffffff?text=Preview+Error';
                const loaderEl = document.getElementById(`ach-load-${index}`);
                if (loaderEl) loaderEl.style.display = 'none';
            }
        }
    });
}

// --- NEW: RENDER RESEARCH FUNCTION (WITH PAGINATION) ---
function renderResearch() {
     const container = document.getElementById('research-container');
    if (!container) return;

    // Using standard grid layout
    container.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';

    // Slice data based on limit
    const visibleResearch = myResearch.slice(0, researchLimit);

    container.innerHTML = visibleResearch.map(item => `
        <div class="card-container-3d group/card relative h-auto w-full">
            <div class="card-body-3d relative size-auto rounded-xl border border-white/20 bg-black p-6 hover:shadow-2xl hover:shadow-purple-500/[0.1]">
                <div class="card-item-3d" style="transform: translateZ(50px)">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="p-2 bg-white/10 rounded-lg border border-white/10">
                            <i data-lucide="${item.icon}" class="w-6 h-6 text-white"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white">${item.title}</h3>
                    </div>
                </div>
                
                <div class="card-item-3d mt-2 text-sm text-neutral-300" style="transform: translateZ(60px)">
                    <p>${item.subtitle}</p>
                </div>
                
                <div class="mt-10 flex items-center justify-between">
                     <div class="card-item-3d" style="transform: translateZ(20px)">
                        <span class="text-xs font-mono text-gray-400 bg-white/5 px-2 py-1 rounded">${item.handle}</span>
                    </div>

                    <div class="card-item-3d" style="transform: translateZ(100px)">
                        <button onclick="openPdfViewer('${item.url}')" class="rounded-xl bg-white px-4 py-2 text-xs font-bold text-black hover:bg-gray-200 transition-colors pointer-events-auto relative z-50">
                            Read Paper
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Add Show More / Show Less Button
    const btnContainer = document.createElement('div');
    btnContainer.className = 'col-span-1 md:col-span-2 lg:col-span-3 flex justify-center mt-8';

    if (researchLimit < myResearch.length) {
        // SHOW MORE
        btnContainer.innerHTML = `
            <button id="load-more-research" class="group relative px-6 py-2 md:px-8 md:py-3 overflow-hidden rounded-full bg-transparent border border-white/30 text-white transition-all hover:border-industrial-accent hover:text-industrial-accent cursor-pointer">
                <span class="absolute top-0 left-0 w-full h-full bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                <span class="relative text-xs md:text-sm font-medium tracking-widest uppercase flex items-center">
                    Show more <i data-lucide="arrow-down" class="ml-2 w-3 h-3 md:w-4 md:h-4"></i>
                </span>
            </button>
        `;
        container.appendChild(btnContainer);
        
        document.getElementById('load-more-research').addEventListener('click', () => {
            researchLimit += ITEMS_PER_PAGE;
            renderResearch();
        });
    } else if (myResearch.length > ITEMS_PER_PAGE) {
        // SHOW LESS
        btnContainer.innerHTML = `
            <button id="show-less-research" class="group relative px-6 py-2 md:px-8 md:py-3 overflow-hidden rounded-full bg-transparent border border-white/30 text-white transition-all hover:border-industrial-accent hover:text-industrial-accent cursor-pointer">
                <span class="absolute top-0 left-0 w-full h-full bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                <span class="relative text-xs md:text-sm font-medium tracking-widest uppercase flex items-center">
                    Show less <i data-lucide="arrow-up" class="ml-2 w-3 h-3 md:w-4 md:h-4"></i>
                </span>
            </button>
        `;
        container.appendChild(btnContainer);

        document.getElementById('show-less-research').addEventListener('click', () => {
            researchLimit = ITEMS_PER_PAGE;
            renderResearch();
        });
    }
    
    if (typeof lucide !== 'undefined') lucide.createIcons();
    init3DCards();
}

// --- LOADING SCREEN LOGIC ---
const initLoadingScreen = () => {
    const bar = document.getElementById('loader-bar');
    const barContainer = document.querySelector('.loader-bar-container');
    const nameReveal = document.getElementById('loader-name');
    const screen = document.getElementById('loading-screen');
    
    // Define Hoosh Sound Generator
    const playHooshSound = () => {
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            const ctx = new AudioContext();
            
            // Resume context if suspended (browser policy)
            if (ctx.state === 'suspended') {
                ctx.resume();
            }

            // Create white noise buffer
            const bufferSize = ctx.sampleRate * 2; // 2 seconds buffer
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                data[i] = Math.random() * 2 - 1;
            }

            const noise = ctx.createBufferSource();
            noise.buffer = buffer;

            // Create Filter for the "Whoosh" sweep
            const filter = ctx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.Q.value = 1;

            const gain = ctx.createGain();
            
            // Connect nodes
            noise.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);

            const now = ctx.currentTime;

            // --- SOUND ENVELOPE ---
            // 1. Filter Sweep (Low to High freq makes the "Whoosh")
            filter.frequency.setValueAtTime(100, now); 
            filter.frequency.exponentialRampToValueAtTime(3000, now + 0.8); // Sweep up to 3kHz

            // 2. Volume Envelope (Fade in -> Fade out)
            gain.gain.setValueAtTime(0, now);
            gain.gain.linearRampToValueAtTime(0.15, now + 0.2); // Attack
            gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2); // Long Decay

            noise.start(now);
            noise.stop(now + 1.5);
        } catch (e) {
            // console.warn("Audio autoplay blocked by browser policy", e);
        }
    };

    let progress = 0;
    const duration = 1500; 
    const intervalTime = duration / 100;
    
    const interval = setInterval(() => {
        progress++;
        bar.style.width = progress + "%";
        
        if (progress >= 100) {
            clearInterval(interval);
            
            // 1. Fade out the bar
            barContainer.style.opacity = '0';
            
            setTimeout(() => {
                barContainer.style.display = 'none';
                
                // PLAY SOUND HERE
                playHooshSound();

                // 2. Trigger BlurText Animation
                nameReveal.style.display = 'block';
                animateBlurText(nameReveal);

                // 3. Slide Curtain Up after reading the name
                setTimeout(() => {
                    screen.classList.add('slide-up-exit');
                    document.body.style.overflow = 'auto'; // Enable scrolling
                    
                    // Reveal the Dock
                    const dock = document.querySelector('.dock-container');
                    if (dock) {
                        dock.style.opacity = '1';
                        dock.style.pointerEvents = 'auto';
                    }

                    // Cleanup DOM after animation finishes
                    setTimeout(() => {
                        screen.style.display = 'none';
                    }, 1000); 
                    
                }, 2200); // Wait for text animation + reading time
                
            }, 300);
        }
    }, intervalTime);
};

// --- Vanilla JS Adaptation of BlurText ---
function animateBlurText(element) {
    const text = element.innerText;
    element.innerHTML = ''; // Clear plain text
    
    // Split into characters (looks more premium than words for a short name)
    const chars = text.split('');
    
    chars.forEach((char, index) => {
        const span = document.createElement('span');
        // Handle spaces
        if (char === ' ') {
            span.innerHTML = '&nbsp;';
            span.style.display = 'inline-block';
        } else {
            span.innerText = char;
            span.classList.add('blur-char');
            
            // Add transition delay for staggered effect
            span.style.transitionDelay = `${index * 0.1}s`;
        }
        element.appendChild(span);
    });

    // Trigger the animation in the next frame to ensure styles are applied first
    requestAnimationFrame(() => {
        const spans = element.querySelectorAll('.blur-char');
        spans.forEach(span => {
            span.classList.add('is-visible');
        });
    });
}

// --- SMOOTH SCROLLBAR INITIALIZATION ---
function initSmoothScroll() {
    const container = document.querySelector('#main-scroll-container');
    if (!container) return;

    // Check if library is loaded
    if (typeof Scrollbar === 'undefined') {
        console.warn('Scrollbar library not loaded yet');
        return;
    }

    const scrollbar = Scrollbar.init(container, {
        damping: 0.05,
        renderByPixels: true,
        alwaysShowTracks: false
    });

    // Connect Dock Links to Smooth Scrollbar
    document.querySelectorAll('.dock-item, a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href') || this.querySelector('a')?.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const target = document.getElementById(targetId);
                if (target) {
                    scrollbar.scrollIntoView(target, {
                        damping: 0.05,
                        offsetTop: 50,
                    });
                }
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initLoadingScreen(); // Start Loading Sequence
    renderProjects();
    initChromaGrid(); // New Chroma Grid for Certs
    renderAchievements(); // New: Render Achievements
    renderResearch(); // New: Render Research
    
    // Short delay to ensure libraries load
    setTimeout(() => {
        initSilkShader(); // Restore Silk Shader Background
        initTextParticles(); // NEW: Particle Text Effect
        initDock(); 
        initSmoothScroll(); 
        initLiquidGlass(); // New Effect
    }, 100);
});