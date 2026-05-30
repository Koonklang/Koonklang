// ==========================================================================
// MOCK DATABASE & SEED DATA (SVGs as base64/data URIs to keep app self-contained)
// ==========================================================================

// Pre-packaged gorgeous vector SVG patterns for offline-friendly mock images
const MOCK_PHOTOS = {
    security: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450"><rect width="100%" height="100%" fill="%23111827"/><defs><linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%2306b6d4" stop-opacity="0.3"/><stop offset="100%" stop-color="%233b82f6" stop-opacity="0.1"/></linearGradient></defs><rect width="100%" height="100%" fill="url(%23g1)"/><circle cx="400" cy="225" r="100" fill="none" stroke="%2306b6d4" stroke-width="2" stroke-dasharray="10 5" opacity="0.5"/><path d="M400 125 L400 325 M300 225 L500 225" stroke="%2306b6d4" stroke-width="1" opacity="0.3"/><path d="M350 175 L450 175 L450 275 L350 275 Z" fill="none" stroke="%233b82f6" stroke-width="3" stroke-linejoin="round"/><circle cx="400" cy="225" r="25" fill="%2306b6d4" opacity="0.8"/><text x="50" y="400" fill="%239ca3af" font-family="sans-serif" font-size="16" font-weight="bold">📍 CAMERA CHECKPOINT: SEC-04 (GATEWAY)</text><text x="650" y="50" fill="%2310b981" font-family="sans-serif" font-size="14" font-weight="bold">● LIVE SYSTEM</text></svg>`,
    
    it: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450"><rect width="100%" height="100%" fill="%230f172a"/><defs><linearGradient id="g2" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="%238b5cf6" stop-opacity="0.25"/><stop offset="100%" stop-color="%231e1b4b" stop-opacity="0.2"/></linearGradient></defs><rect width="100%" height="100%" fill="url(%23g2)"/><path d="M 50,50 L 750,50 L 750,350 L 50,350 Z" fill="%23020617" stroke="%23334155" stroke-width="2"/><rect x="80" y="80" width="120" height="80" rx="5" fill="%231e293b" stroke="%238b5cf6" stroke-width="2"/><circle cx="110" cy="110" r="10" fill="%2310b981"/><circle cx="140" cy="110" r="10" fill="%2310b981"/><line x1="100" x1="100" y1="130" x2="180" y2="130" stroke="%238b5cf6" stroke-width="3"/><rect x="80" y="180" width="120" height="80" rx="5" fill="%231e293b" stroke="%233b82f6" stroke-width="1"/><circle cx="110" cy="210" r="10" fill="%23ef4444" stroke="%23ef4444" stroke-width="1" opacity="0.8"/><path d="M 230,120 L 300,120 L 300,220 L 370,220" fill="none" stroke="%238b5cf6" stroke-width="2" stroke-dasharray="5 5"/><text x="420" y="150" fill="%23f3f4f6" font-family="sans-serif" font-size="22" font-weight="bold">NETWORK SERVER ROOM A</text><text x="420" y="180" fill="%239ca3af" font-family="sans-serif" font-size="14">All switch panels pinged successfully. Temp: 21°C</text><text x="700" y="385" fill="%238b5cf6" font-family="sans-serif" font-size="12" font-weight="bold">SYS_MON_V2</text></svg>`,
    
    maintenance: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450"><rect width="100%" height="100%" fill="%231c1917"/><defs><linearGradient id="g3" x1="100%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="%23f59e0b" stop-opacity="0.25"/><stop offset="100%" stop-color="%231e1b4b" stop-opacity="0.1"/></linearGradient></defs><rect width="100%" height="100%" fill="url(%23g3)"/><circle cx="200" cy="200" r="120" fill="none" stroke="%23f59e0b" stroke-width="4" stroke-dasharray="20 10" opacity="0.6"/><path d="M 200,80 L 200,140 M 200,260 L 200,320 M 80,200 L 140,200 M 260,200 L 320,200" stroke="%23f59e0b" stroke-width="4" opacity="0.6"/><path d="M150 150 L250 250 M250 150 L150 250" stroke="%23ef4444" stroke-width="4"/><text x="360" y="180" fill="%23f3f4f6" font-family="sans-serif" font-size="24" font-weight="bold">AIR COMPRESSOR UNIT-B</text><text x="360" y="215" fill="%23ef4444" font-family="sans-serif" font-size="16" font-weight="bold">⚠️ STATUS: PRESSURE OVER LIMIT</text><text x="360" y="245" fill="%239ca3af" font-family="sans-serif" font-size="14">Ventilation exhaust checked. Requires valve replacement.</text></svg>`,
    
    general: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450"><rect width="100%" height="100%" fill="%230f172a"/><defs><linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="%2306b6d4" stop-opacity="0.2"/><stop offset="100%" stop-color="%23d946ef" stop-opacity="0.15"/></linearGradient></defs><rect width="100%" height="100%" fill="url(%23g4)"/><circle cx="150" cy="150" r="60" fill="none" stroke="%23d946ef" stroke-width="1.5" opacity="0.5"/><circle cx="650" cy="300" r="100" fill="none" stroke="%2306b6d4" stroke-width="1.5" opacity="0.5"/><path d="M 50,300 L 350,100 L 750,300" stroke="rgba(255,255,255,0.05)" stroke-width="4" fill="none"/><text x="100" y="380" fill="%23f3f4f6" font-family="sans-serif" font-size="20" font-weight="bold">ตรวจเช็คความเรียบร้อยบริเวณเคาน์เตอร์ต้อนรับส่วนหน้า</text><text x="100" y="410" fill="%239ca3af" font-family="sans-serif" font-size="14">เหตุการณ์ปกติ เจ้าหน้าที่พร้อมปฏิบัติงาน สภาพแวดล้อมเป็นระเบียบ</text></svg>`
};

const DEFAULT_USERS = [
    {
        name: "สมชาย แสนดี (Admin)",
        email: "admin@duty.com",
        password: "admin123",
        role: "admin",
        registerDate: "2026-05-15T08:30:00+07:00"
    },
    {
        name: "ศิริชัย มั่นคง (Member)",
        email: "member@duty.com",
        password: "member123",
        role: "member",
        registerDate: "2026-05-20T10:00:00+07:00"
    }
];

const DEFAULT_REPORTS = [
    {
        id: "rep-1782341908",
        title: "ตรวจเช็คห้องตู้ Server หลักประจำเป็นชั่วโมง",
        location: "ห้องเครือข่ายเซิร์ฟเวอร์ ชั้น 4 อาคาร A",
        category: "it",
        urgency: "normal",
        description: "ทำการเดินตรวจเช็คอุณหภูมิห้อง Server อยู่ที่ 21 องศาเซลเซียส สถานะสวิตช์เราเตอร์และอุปกรณ์กระจายสัญญาณทำงานปกติ ไม่มีไฟแจ้งเตือนผิดพลาด เครื่องสำรองไฟแบตเตอรี่เต็ม ระบบทำงานปกติ 100%",
        image: MOCK_PHOTOS.it,
        reporterEmail: "member@duty.com",
        reporterName: "ศิริชัย มั่นคง (Member)",
        timestamp: "2026-05-30T22:30:00+07:00",
        status: "approved"
    },
    {
        id: "rep-1782342012",
        title: "🚨 พบแรงดันเครื่องบีบอัดอากาศสูงเกินกำหนด",
        location: "ห้องเครื่องซ่อมบำรุง ชั้นใต้ดิน B1",
        category: "maintenance",
        urgency: "urgent",
        description: "ตรวจพบมาตรวัดแรงดันห้องอัดอากาศหลักขยับพุ่งสูงขึ้นกว่าขีดสีแดงเตือนความปลอดภัย (Overpressure) ได้ทำการเปิดวาล์วระบายแรงดันสำรองชั่วคราวเพื่อป้องกันการระเบิด และทำเรื่องแจ้งประสานช่างเทคนิคภายนอกให้เตรียมเข้ามาเปลี่ยนวาล์วระบายแรงดันความปลอดภัยหลักทันที",
        image: MOCK_PHOTOS.maintenance,
        reporterEmail: "member@duty.com",
        reporterName: "ศิริชัย มั่นคง (Member)",
        timestamp: "2026-05-30T23:45:00+07:00",
        status: "pending"
    },
    {
        id: "rep-1782342125",
        title: "เดินตรวจแนวรั้วความปลอดภัยรอบอาคารนอกช่วงเวลาทำการ",
        location: "แนวรั้วความปลอดภัยด้านนอก ประตู 4",
        category: "security",
        urgency: "normal",
        description: "ลาดตระเวนรอบแนวรั้วประตูทางเข้าออกที่ 4 สภาพหลอดไฟส่องสว่างเปิดทำงานครบรอบจุด ล็อคแม่กุญแจประตูแน่นหนาเรียบร้อย ตรวจเช็คกล้องวงจรปิดรอบนอกทำงานปกติดี หมุนกล้องสแกนพื้นที่ได้เรียบร้อย ไม่มีบุคคลน่าสงสัยมาป้วนเปี้ยน",
        image: MOCK_PHOTOS.security,
        reporterEmail: "admin@duty.com",
        reporterName: "สมชาย แสนดี (Admin)",
        timestamp: "2026-05-31T00:15:00+07:00",
        status: "approved"
    }
];

// Database Controllers (using LocalStorage)
const DB = {
    getUsers: function() {
        if (!localStorage.getItem("duty_users")) {
            localStorage.setItem("duty_users", JSON.stringify(DEFAULT_USERS));
        }
        return JSON.parse(localStorage.getItem("duty_users"));
    },
    saveUsers: function(users) {
        localStorage.setItem("duty_users", JSON.stringify(users));
    },
    getReports: function() {
        if (!localStorage.getItem("duty_reports")) {
            localStorage.setItem("duty_reports", JSON.stringify(DEFAULT_REPORTS));
        }
        return JSON.parse(localStorage.getItem("duty_reports"));
    },
    saveReports: function(reports) {
        localStorage.setItem("duty_reports", JSON.stringify(reports));
    },
    getCurrentSession: function() {
        return JSON.parse(localStorage.getItem("duty_session"));
    },
    setCurrentSession: function(session) {
        if (session) {
            localStorage.setItem("duty_session", JSON.stringify(session));
        } else {
            localStorage.removeItem("duty_session");
        }
    },
    getRememberToken: function() {
        return localStorage.getItem("duty_remember_email");
    },
    setRememberToken: function(email) {
        if (email) {
            localStorage.setItem("duty_remember_email", email);
        } else {
            localStorage.removeItem("duty_remember_email");
        }
    },
    getTheme: function() {
        return localStorage.getItem("duty_theme") || "dark";
    },
    setTheme: function(theme) {
        localStorage.setItem("duty_theme", theme);
    }
};

// ==========================================================================
// APP INITIAL STATE & CONSTANTS
// ==========================================================================
let currentUser = null;
let uploadedImageBase64 = "";

// ==========================================================================
// INITIALIZATION ON PAGE LOAD
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    // 1. Theme initialization
    const savedTheme = DB.getTheme();
    if (savedTheme === "light") {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        const themeBtn = document.querySelector(".theme-toggle-btn i");
        if (themeBtn) themeBtn.setAttribute("data-lucide", "moon");
    }

    // 2. Setup Splash Screen listener
    const splash = document.getElementById("splash-screen");
    splash.addEventListener("click", () => {
        splash.classList.add("fade-out");
        
        // Show app container smooth
        const app = document.getElementById("app-wrapper");
        app.classList.remove("app-hidden");
        
        // Check remember me token
        checkSessionOnLoad();
    });

    // 3. Setup Drag and Drop events
    const dragArea = document.getElementById("image-drag-area");
    if (dragArea) {
        ['dragenter', 'dragover'].forEach(eventName => {
            dragArea.addEventListener(eventName, (e) => {
                e.preventDefault();
                e.stopPropagation();
                dragArea.style.borderColor = "var(--accent-cyan)";
                dragArea.style.background = "rgba(6, 182, 212, 0.05)";
            }, false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            dragArea.addEventListener(eventName, (e) => {
                e.preventDefault();
                e.stopPropagation();
                dragArea.style.borderColor = "var(--border-color)";
                dragArea.style.background = "var(--input-bg)";
            }, false);
        });

        dragArea.addEventListener('drop', (e) => {
            const dt = e.dataTransfer;
            const files = dt.files;
            if (files && files.length > 0) {
                processUploadedFile(files[0]);
            }
        }, false);
    }

    // 4. Live Clock updates
    setInterval(updateLiveClock, 1000);
    updateLiveClock();
    
    // Create icons on initial load
    lucide.createIcons();
});

// Update standard clock
function updateLiveClock() {
    const clockDisplay = document.getElementById("live-time-display");
    if (clockDisplay) {
        const now = new Date();
        const hrs = String(now.getHours()).padStart(2, '0');
        const mins = String(now.getMinutes()).padStart(2, '0');
        const secs = String(now.getSeconds()).padStart(2, '0');
        clockDisplay.textContent = `${hrs}:${mins}:${secs}`;
    }
}

// Session checking on startup
function checkSessionOnLoad() {
    const activeSession = DB.getCurrentSession();
    const rememberEmail = DB.getRememberToken();
    
    if (activeSession) {
        // Restore session
        currentUser = activeSession;
        enterDashboard();
    } else {
        // Show Auth Screen
        const authSec = document.getElementById("auth-section");
        authSec.classList.remove("section-hidden");
        
        // Pre-fill email if Remember me was checked previously
        if (rememberEmail) {
            document.getElementById("login-email").value = rememberEmail;
            document.getElementById("remember-me").checked = true;
        }
    }
    lucide.createIcons();
}

// ==========================================================================
// SYSTEM AUTHENTICATION LOGIC (LOGIN, REGISTER, LOGOUT)
// ==========================================================================

// Switch Auth Tabs (Login / Register)
function switchAuthTab(tab) {
    const loginForm = document.getElementById("login-form");
    const regForm = document.getElementById("register-form");
    const loginTabBtn = document.getElementById("tab-login");
    const regTabBtn = document.getElementById("tab-register");
    const authTitle = document.getElementById("auth-title");
    const authSubtitle = document.getElementById("auth-subtitle");

    if (tab === 'login') {
        loginForm.classList.remove("form-hidden");
        regForm.classList.add("form-hidden");
        loginTabBtn.classList.add("active");
        regTabBtn.classList.remove("active");
        authTitle.textContent = "เข้าสู่ระบบ";
        authSubtitle.textContent = "กรุณาเข้าสู่ระบบเพื่อดำเนินการรายงานเวร";
    } else {
        loginForm.classList.add("form-hidden");
        regForm.classList.remove("form-hidden");
        loginTabBtn.classList.remove("active");
        regTabBtn.classList.add("active");
        authTitle.textContent = "สร้างบัญชีใหม่";
        authSubtitle.textContent = "สมัครสมาชิกเจ้าหน้าที่เพื่อเข้าใช้งานระบบรายงาน";
    }
    lucide.createIcons();
}

// Hide/Show Passwords
function togglePasswordVisibility(fieldId) {
    const input = document.getElementById(fieldId);
    if (!input) return;
    
    const iconBtn = input.nextElementSibling.querySelector("i");
    if (input.type === "password") {
        input.type = "text";
        iconBtn.setAttribute("data-lucide", "eye-off");
    } else {
        input.type = "password";
        iconBtn.setAttribute("data-lucide", "eye");
    }
    lucide.createIcons();
}

// Handler for Login Submit
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById("login-email").value.trim().toLowerCase();
    const pass = document.getElementById("login-password").value;
    const rememberMe = document.getElementById("remember-me").checked;

    const users = DB.getUsers();
    const userFound = users.find(u => u.email === email && u.password === pass);

    if (userFound) {
        currentUser = {
            name: userFound.name,
            email: userFound.email,
            role: userFound.role,
            registerDate: userFound.registerDate
        };

        // Save session
        DB.setCurrentSession(currentUser);

        // Remember Me checkbox persistence
        if (rememberMe) {
            DB.setRememberToken(currentUser.email);
        } else {
            DB.setRememberToken(null);
        }

        // Hide Auth, Enter Dashboard
        document.getElementById("auth-section").classList.add("section-hidden");
        enterDashboard();
    } else {
        alert("❌ อีเมลการใช้งานหรือรหัสผ่านไม่ถูกต้อง! กรุณาลองใหม่อีกครั้ง หรือติดต่อผู้ดูแลระบบ");
    }
}

// Handler for Registration Submit
function handleRegister(event) {
    event.preventDefault();
    const name = document.getElementById("reg-name").value.trim();
    const email = document.getElementById("reg-email").value.trim().toLowerCase();
    const pass = document.getElementById("reg-password").value;
    const role = document.querySelector('input[name="reg-role"]:checked').value;

    const users = DB.getUsers();
    
    // Check if email already registered
    if (users.some(u => u.email === email)) {
        alert("⚠️ อีเมลนี้ถูกลงทะเบียนไว้ในระบบแล้ว! กรุณาใช้อีเมลอื่น หรือเข้าสู่ระบบ");
        return;
    }

    // Save new user
    const newUser = {
        name: name,
        email: email,
        password: pass,
        role: role,
        registerDate: new Date().toISOString()
    };

    users.push(newUser);
    DB.saveUsers(users);

    alert("✅ ลงทะเบียนสมาชิกในระบบสำเร็จ! กรุณาเข้าสู่ระบบด้วยบัญชีที่เพิ่งสร้างขึ้น");
    
    // Clear registration form and switch tab
    document.getElementById("register-form").reset();
    switchAuthTab('login');
    document.getElementById("login-email").value = email;
}

// Handler for Logout
function handleLogout() {
    if (confirm("คุณแน่ใจหรือไม่ว่าต้องการออกจากระบบ?")) {
        currentUser = null;
        DB.setCurrentSession(null);
        
        // Hide dashboard panels, show Auth Container
        document.getElementById("main-dashboard").classList.add("section-hidden");
        const authSec = document.getElementById("auth-section");
        authSec.classList.remove("section-hidden");
        
        // Reset forms
        document.getElementById("login-form").reset();
        document.getElementById("register-form").reset();
        
        checkSessionOnLoad();
    }
}

// Setup Dashboard User States & View limits
function enterDashboard() {
    const dashboard = document.getElementById("main-dashboard");
    dashboard.classList.remove("section-hidden");

    // Populate user profile info in sidebar
    document.getElementById("sidebar-username").textContent = currentUser.name;
    const roleText = currentUser.role === 'admin' ? "ผู้ควบคุมเวร (Admin)" : "เจ้าหน้าที่เวร (Member)";
    const sidebarRole = document.getElementById("sidebar-userrole");
    sidebarRole.textContent = roleText;
    
    if (currentUser.role === 'admin') {
        sidebarRole.className = "user-role-badge badge badge-secondary text-xs";
    } else {
        sidebarRole.className = "user-role-badge badge badge-primary text-xs";
    }

    // Initial avatar char
    const avatarSidebar = document.getElementById("sidebar-avatar");
    avatarSidebar.textContent = currentUser.name.charAt(0);

    // Toggle panels visibility depending on roles
    const adminSidebarItem = document.getElementById("nav-admin-only");
    const adminMobileItem = document.getElementById("mobile-nav-admin-only");
    
    if (currentUser.role === 'admin') {
        adminSidebarItem.classList.remove("hidden");
        adminMobileItem.classList.remove("hidden");
    } else {
        adminSidebarItem.classList.add("hidden");
        adminMobileItem.classList.add("hidden");
    }

    // Update Profile Panel
    updateProfilePanelDetails();

    // Default tab
    switchMainTab('tab-feed');
}

// Populate user profile details
function updateProfilePanelDetails() {
    document.getElementById("profile-full-name").textContent = currentUser.name;
    document.getElementById("profile-email").textContent = currentUser.email;
    
    const roleBadge = document.getElementById("profile-role-badge");
    roleBadge.textContent = currentUser.role === 'admin' ? "ผู้ควบคุมเวร (Admin)" : "เจ้าหน้าที่เวร (Member)";
    roleBadge.className = currentUser.role === 'admin' ? "badge badge-secondary" : "badge badge-primary";

    document.getElementById("profile-avatar-char").textContent = currentUser.name.charAt(0);
    
    // Set formatted register date
    const regDate = new Date(currentUser.registerDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("profile-stat-register-date").textContent = regDate.toLocaleDateString('th-TH', options);

    // Calculate user's individual total reports
    const reports = DB.getReports();
    const myReportsCount = reports.filter(r => r.reporterEmail === currentUser.email).length;
    document.getElementById("profile-stat-reports-count").textContent = myReportsCount;
}

// Reset Local Data database function
function resetDatabaseToDefault() {
    if (confirm("⚠️ ข้อควรระวัง! คุณต้องการล้างฐานข้อมูล และคืนค่าระบบรายงานเวรกลับไปเป็นค่าจำลองเริ่มต้นหรือไม่? ข้อมูลรายงานและสมาชิกที่เพิ่มเข้าไปใหม่ทั้งหมดจะสูญหาย")) {
        localStorage.clear();
        alert("✅ รีเซ็ตข้อมูลกลับสู่ค่าเริ่มต้นเรียบร้อยแล้ว! ระบบจะทำการรีโหลดหน้าจอใหม่");
        window.location.reload();
    }
}

// Toggle Mobile Responsive Sidebar drawer
function toggleMobileSidebar() {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar.style.display === "flex") {
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "flex";
        sidebar.style.position = "fixed";
        sidebar.style.width = "var(--sidebar-width)";
        sidebar.style.height = "100vh";
        sidebar.style.zIndex = "999";
        
        // Click outside handler
        const contentArea = document.querySelector(".workspace-container");
        const closeSidebarHandler = function() {
            sidebar.style.display = "none";
            contentArea.removeEventListener("click", closeSidebarHandler);
        };
        setTimeout(() => {
            contentArea.addEventListener("click", closeSidebarHandler);
        }, 100);
    }
}

// ==========================================================================
// NAVIGATION & PANEL CONTROL LOGIC
// ==========================================================================
function switchMainTab(tabName) {
    // Determine panel ID
    let panelId = "panel-feed";
    let title = "รายงานเวรล่าสุด";
    
    if (tabName === 'tab-new-report') {
        panelId = "panel-new-report";
        title = "เขียนรายงานเวรใหม่";
    } else if (tabName === 'tab-admin-console') {
        panelId = "panel-admin-console";
        title = "แผงควบคุมผู้ดูแลระบบ";
    } else if (tabName === 'tab-profile') {
        panelId = "panel-profile";
        title = "โปรไฟล์และความปลอดภัย";
    }

    // Hide all panels
    const panels = document.querySelectorAll(".workspace-panel");
    panels.forEach(p => p.classList.add("panel-hidden"));

    // Show selected panel
    const targetPanel = document.getElementById(panelId);
    if (targetPanel) {
        targetPanel.classList.remove("panel-hidden");
    }

    // Update panel title header
    document.getElementById("current-panel-title").textContent = title;

    // Update active nav state (Desktop Sidebar)
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => {
        if (item.getAttribute("data-tab") === tabName) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });

    // Update active nav state (Mobile Bottom Nav)
    const mobItems = document.querySelectorAll(".mobile-nav-item");
    mobItems.forEach(item => {
        if (item.getAttribute("data-tab") === tabName) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });

    // Action triggers for specific panels load
    if (panelId === "panel-feed") {
        renderReportsList();
    } else if (panelId === "panel-admin-console") {
        renderAdminUsers();
    } else if (panelId === "panel-profile") {
        updateProfilePanelDetails();
    }

    // Smooth scroll workspace content back to top
    const content = document.querySelector(".workspace-content");
    if (content) content.scrollTop = 0;

    lucide.createIcons();
}

// ==========================================================================
// THEME SWITCHER LOGIC
// ==========================================================================
function toggleTheme() {
    const isDark = document.body.classList.contains("dark-theme");
    const themeBtn = document.querySelectorAll(".theme-toggle-btn i");
    
    if (isDark) {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        DB.setTheme("light");
        themeBtn.forEach(btn => btn.setAttribute("data-lucide", "moon"));
    } else {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        DB.setTheme("dark");
        themeBtn.forEach(btn => btn.setAttribute("data-lucide", "sun"));
    }
    lucide.createIcons();
}

// ==========================================================================
// REPORT CREATION & IMAGE UPLOADS FUNCTIONALITY
// ==========================================================================

// Click trigger image selector
function triggerImageInput() {
    document.getElementById("rep-image-file").click();
}

// Select image callback
function previewSelectedImage(event) {
    const file = event.target.files[0];
    if (file) {
        processUploadedFile(file);
    }
}

// FileReader conversion to Base64 data
function processUploadedFile(file) {
    if (!file.type.match('image.*')) {
        alert("⚠️ ไฟล์ที่เลือกไม่ใช่รูปภาพ! กรุณาเลือกไฟล์ภาพ (PNG, JPEG, GIF) เท่านั้น");
        return;
    }

    if (file.size > 5 * 1024 * 1024) {
        alert("⚠️ รูปภาพมีขนาดใหญ่เกินกว่าที่กำหนด! กรุณาอัปโหลดภาพขนาดไม่เกิน 5MB");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        uploadedImageBase64 = e.target.result;
        
        // Update uploader layout previews
        const promptZone = document.getElementById("upload-prompt");
        const previewWrapper = document.getElementById("upload-preview-wrapper");
        const previewImg = document.getElementById("upload-preview-image");

        promptZone.classList.add("hidden");
        previewWrapper.classList.remove("hidden");
        previewImg.src = uploadedImageBase64;
    };
    reader.readAsDataURL(file);
}

// Clear currently selected image
function clearUploadedImage(event) {
    event.stopPropagation(); // Avoid triggering parent click
    
    uploadedImageBase64 = "";
    document.getElementById("rep-image-file").value = "";
    
    const promptZone = document.getElementById("upload-prompt");
    const previewWrapper = document.getElementById("upload-preview-wrapper");
    const previewImg = document.getElementById("upload-preview-image");

    promptZone.classList.remove("hidden");
    previewWrapper.classList.add("hidden");
    previewImg.src = "";
}

// Quick apply preset reports simulation images for convenience testing
function useSampleReportPhoto() {
    const categorySelect = document.getElementById("rep-category").value;
    const cat = categorySelect || "general";
    
    uploadedImageBase64 = MOCK_PHOTOS[cat];
    
    const promptZone = document.getElementById("upload-prompt");
    const previewWrapper = document.getElementById("upload-preview-wrapper");
    const previewImg = document.getElementById("upload-preview-image");

    promptZone.classList.add("hidden");
    previewWrapper.classList.remove("hidden");
    previewImg.src = uploadedImageBase64;

    // Autofill title if empty for quick testing
    const titleInput = document.getElementById("rep-title");
    if (!titleInput.value) {
        titleInput.value = `[จำลองข้อมูล] ตรวจความปลอดภัยหมวดหมู่ ${cat.toUpperCase()}`;
    }
    const locationInput = document.getElementById("rep-location");
    if (!locationInput.value) {
        locationInput.value = "ตึกวิจัยกลาง แผนกตรวจสอบ";
    }
}

// Click prefill quick template messages
function applyQuickTemplate(type) {
    const textarea = document.getElementById("rep-description");
    let text = "";

    switch(type) {
        case 'ปกติ':
            text = "ทำการเดินตรวจตราเรียบร้อยแล้ว เหตุการณ์เป็นปกติ ไม่พบบุคคลน่าสงสัย หรือสิ่งของวางกีดขวางเส้นทางหนีไฟ สภาพแวดล้อมโดยรวมและจุดตรวจสะอาดเรียบร้อยดี";
            break;
        case 'ซ่อมบำรุง':
            text = "ตรวจพบความชำรุดเสียหายของอุปกรณ์สำคัญ ได้ดำเนินการติดป้ายแจ้งเตือนระวังอันตรายเพื่อความปลอดภัยเบื้องต้น และแจ้งเรื่องต่อช่างซ่อมบำรุงในแผนกเรียบร้อยเพื่อรอจัดสรรคิวมาแก้ไข";
            break;
        case 'ความปลอดภัย':
            text = "พบบุคคลภายนอกเดินอยู่ในบริเวณควบคุมโดยไม่มีบัตรแสดงตน ได้เข้าทำการตรวจสอบ ตักเตือนความปลอดภัย และเชิญออกนอกพื้นที่หวงห้ามเพื่อความปลอดภัยตามข้อกำหนดเรียบร้อย";
            break;
        case 'ไอที':
            text = "ตรวจพบสัญญาณเชื่อมต่อระบบขัดข้องบางส่วน ได้ทำการรีสตาร์ทตัวอุปกรณ์กระจายสัญญาณเครือข่ายระดับย่อยและแจ้งปัญหาต่อประสานงาน IT Support เพื่อตรวจสอบความสถียรเพิ่มเติมเรียบร้อย";
            break;
        case 'ความสะอาด':
            text = "ตรวจพื้นที่ดูแลรับผิดชอบ พบว่าพนักงานทำความสะอาดได้กวาดถู ขจัดขยะ และจัดเก็บสิ่งของเป็นระเบียบเรียบร้อย สถานที่พร้อมบริการในวันทำการปกติ";
            break;
    }
    
    textarea.value = text;
}

// Handler for Submitting a New Report
function handleNewReportSubmit(event) {
    event.preventDefault();

    if (!uploadedImageBase64) {
        alert("⚠️ กรุณาแนบภาพหลักฐานการอัปโหลดประกอบรายงานด้วยครับ!");
        return;
    }

    const category = document.getElementById("rep-category").value;
    const title = document.getElementById("rep-title").value.trim();
    const location = document.getElementById("rep-location").value.trim();
    const urgency = document.querySelector('input[name="rep-urgency"]:checked').value;
    const description = document.getElementById("rep-description").value.trim();

    const reports = DB.getReports();
    
    const newReport = {
        id: "rep-" + Date.now(),
        title: title,
        location: location,
        category: category,
        urgency: urgency,
        description: description,
        image: uploadedImageBase64,
        reporterEmail: currentUser.email,
        reporterName: currentUser.name,
        timestamp: new Date().toISOString(),
        status: "pending" // default wait verification
    };

    reports.unshift(newReport); // newest first
    DB.saveReports(reports);

    alert("🎉 บันทึกรายงานเวรเสร็จสิ้น! ข้อมูลจะถูกจัดเก็บลงฟีดและแจ้งไปยังผู้ดูแลเพื่อประเมินผล");

    // Reset Form & switch to Feed Panel
    document.getElementById("report-submission-form").reset();
    clearUploadedImage(event);
    switchMainTab('tab-feed');
}

// ==========================================================================
// SEARCH, FILTER, AND FEED RENDER LOGIC
// ==========================================================================

// Toggle advance filter pane
function toggleFilterDrawer() {
    const drawer = document.getElementById("filter-drawer");
    const icon = document.querySelector("#btn-toggle-filters i");
    
    if (drawer.classList.contains("hidden")) {
        drawer.classList.remove("hidden");
        icon.setAttribute("data-lucide", "chevron-up");
    } else {
        drawer.classList.add("hidden");
        icon.setAttribute("data-lucide", "filter");
    }
    lucide.createIcons();
}

// Clear all active filters to default
function resetAllFilters() {
    document.getElementById("search-input").value = "";
    document.getElementById("filter-category").value = "all";
    document.getElementById("filter-urgency").value = "all";
    document.getElementById("filter-status").value = "all";
    document.getElementById("filter-date").value = "all";
    
    filterReports();
}

// Main logic for filtering, search and stats updating
function filterReports() {
    const searchVal = document.getElementById("search-input").value.toLowerCase().trim();
    const catVal = document.getElementById("filter-category").value;
    const urgVal = document.getElementById("filter-urgency").value;
    const statVal = document.getElementById("filter-status").value;
    const dateVal = document.getElementById("filter-date").value;

    const reports = DB.getReports();
    let filtered = [...reports];

    // Filter counter
    let activeFilterCount = 0;
    if (catVal !== "all") activeFilterCount++;
    if (urgVal !== "all") activeFilterCount++;
    if (statVal !== "all") activeFilterCount++;
    if (dateVal !== "all") activeFilterCount++;
    
    const filterBadge = document.getElementById("filter-active-count");
    if (filterBadge) {
        filterBadge.textContent = activeFilterCount;
        filterBadge.className = activeFilterCount > 0 ? "badge badge-accent" : "badge badge-outline";
    }

    // 1. Text Search Filter (title, description, location, reporterName)
    if (searchVal) {
        filtered = filtered.filter(r => 
            r.title.toLowerCase().includes(searchVal) ||
            r.description.toLowerCase().includes(searchVal) ||
            r.location.toLowerCase().includes(searchVal) ||
            r.reporterName.toLowerCase().includes(searchVal)
        );
    }

    // 2. Category Filter
    if (catVal !== "all") {
        filtered = filtered.filter(r => r.category === catVal);
    }

    // 3. Urgency Filter
    if (urgVal !== "all") {
        filtered = filtered.filter(r => r.urgency === urgVal);
    }

    // 4. Status Filter
    if (statVal !== "all") {
        filtered = filtered.filter(r => r.status === statVal);
    }

    // 5. Date Time Filter
    if (dateVal !== "all") {
        const today = new Date();
        today.setHours(0,0,0,0);
        
        filtered = filtered.filter(r => {
            const reportDate = new Date(r.timestamp);
            
            if (dateVal === "today") {
                return reportDate >= today;
            } else if (dateVal === "yesterday") {
                const yesterday = new Date(today);
                yesterday.setDate(yesterday.getDate() - 1);
                return reportDate >= yesterday && reportDate < today;
            } else if (dateVal === "week") {
                const firstDayOfWeek = new Date(today);
                firstDayOfWeek.setDate(today.getDate() - today.getDay()); // start of week Sunday
                return reportDate >= firstDayOfWeek;
            }
            return true;
        });
    }

    renderReportsHTML(filtered);
}

// Render dynamic stats card updates
function updateOverviewStatsCounters(allReports) {
    const total = allReports.length;
    const urgent = allReports.filter(r => r.urgency === 'urgent').length;
    const pending = allReports.filter(r => r.status === 'pending').length;
    const resolved = allReports.filter(r => r.status === 'approved').length;

    document.getElementById("stat-total").textContent = total;
    document.getElementById("stat-urgent").textContent = urgent;
    document.getElementById("stat-pending").textContent = pending;
    document.getElementById("stat-resolved").textContent = resolved;
}

// Read database and display feed
function renderReportsList() {
    const reports = DB.getReports();
    updateOverviewStatsCounters(reports);
    filterReports(); // triggers filter flow which in turn renders items based on filters
}

// Translate raw timestamp to elegant Thai text date format
function formatThaiDateString(isoString) {
    const dateObj = new Date(isoString);
    const months = [
        "ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.",
        "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."
    ];
    
    const day = dateObj.getDate();
    const month = months[dateObj.getMonth()];
    const year = dateObj.getFullYear() + 543; // Buddhist Era
    
    const hours = String(dateObj.getHours()).padStart(2, '0');
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');
    
    return `${day} ${month} ${year} • ${hours}:${minutes} น.`;
}

// Inject filtered array into Grid Container HTML
function renderReportsHTML(reportsList) {
    const grid = document.getElementById("reports-feed-grid");
    const emptyUI = document.getElementById("no-reports-ui");

    if (reportsList.length === 0) {
        grid.innerHTML = "";
        emptyUI.classList.remove("hidden");
        return;
    } else {
        emptyUI.classList.add("hidden");
    }

    let html = "";

    reportsList.forEach(report => {
        const isUrgent = report.urgency === 'urgent';
        const cardClass = isUrgent ? 'report-card urgency-card-urgent' : 'report-card';
        const thaiDate = formatThaiDateString(report.timestamp);
        
        // Format Urgency Tag
        let urgencyBadgeHTML = "";
        if (report.urgency === 'urgent') {
            urgencyBadgeHTML = `<span class="urgency-badge badge-urgent"><i data-lucide="alert-octagon"></i> เร่งด่วนที่สุด</span>`;
        } else if (report.urgency === 'warning') {
            urgencyBadgeHTML = `<span class="urgency-badge badge-warning"><i data-lucide="alert-triangle"></i> ควรระวัง</span>`;
        } else {
            urgencyBadgeHTML = `<span class="urgency-badge badge-normal"><i data-lucide="shield-check"></i> ปกติ</span>`;
        }

        // Format Category label
        let catText = "ทั่วไป";
        let catClass = "cat-general";
        let catIcon = "info";
        if (report.category === 'security') {
            catText = "ความปลอดภัย"; catClass = "cat-security"; catIcon = "shield-alert";
        } else if (report.category === 'it') {
            catText = "ไอทีและระบบ"; catClass = "cat-it"; catIcon = "cpu";
        } else if (report.category === 'maintenance') {
            catText = "ซ่อมบำรุง"; catClass = "cat-maintenance"; catIcon = "wrench";
        }

        // Format Status label
        let statusText = "รอตรวจสอบ";
        let statusClass = "status-pending";
        if (report.status === 'approved') {
            statusText = "อนุมัติเรียบร้อย"; statusClass = "status-approved";
        } else if (report.status === 'rejected') {
            statusText = "มีปัญหารอแก้"; statusClass = "status-rejected";
        }

        // Generate Buttons conditional based on role
        let actionButtonsHTML = "";
        const isOwner = report.reporterEmail === currentUser.email;
        const isAdmin = currentUser.role === 'admin';

        // 1. Line Copy Trigger
        actionButtonsHTML += `
            <button class="btn btn-outline btn-xs" onclick="copyReportSummaryToClipboard('${report.id}')" title="คัดลอกข้อความสรุปเพื่อส่งเข้ากลุ่ม Line">
                <i data-lucide="share-2"></i> สรุปแชร์ Line
            </button>
        `;

        // 2. Admin verification dropdown / Member delete button
        if (isAdmin) {
            // Admin status control
            actionButtonsHTML += `
                <div class="admin-approval-dropdown-wrapper">
                    <select class="admin-select-status" onchange="handleAdminChangeStatus('${report.id}', this.value)">
                        <option value="pending" ${report.status === 'pending' ? 'selected' : ''}>⏳ รอตรวจ</option>
                        <option value="approved" ${report.status === 'approved' ? 'selected' : ''}>✅ อนุมัติ</option>
                        <option value="rejected" ${report.status === 'rejected' ? 'selected' : ''}>❌ มีปัญหา</option>
                    </select>
                </div>
                <button class="btn btn-outline btn-xs text-danger" onclick="handleDeleteReport('${report.id}')" title="ลบรายงานเวรนี้">
                    <i data-lucide="trash-2"></i>
                </button>
            `;
        } else {
            // Member only can delete their own 'pending' reports
            if (isOwner && report.status === 'pending') {
                actionButtonsHTML += `
                    <button class="btn btn-outline btn-xs text-danger" onclick="handleDeleteReport('${report.id}')" title="ลบรายงาน">
                        <i data-lucide="trash-2"></i> ลบ
                    </button>
                `;
            }
        }

        html += `
            <article class="${cardClass}" id="card-${report.id}">
                <div class="report-card-image-box" onclick="openLightbox('${report.image}', '${report.title} (${report.location})')">
                    <img src="${report.image}" alt="ภาพบันทึกรายงานเวร">
                    ${urgencyBadgeHTML}
                </div>
                <div class="report-card-body">
                    <div class="report-card-header">
                        <span class="category-tag ${catClass}">
                            <i data-lucide="${catIcon}"></i> ${catText}
                        </span>
                        <span class="status-badge ${statusClass}">${statusText}</span>
                    </div>
                    
                    <h3 class="report-card-title">${report.title}</h3>
                    
                    <div class="report-card-location">
                        <i data-lucide="map-pin"></i>
                        <span>${report.location}</span>
                    </div>
                    
                    <p class="report-card-desc">${report.description}</p>
                    
                    <div class="reporter-block">
                        <div class="avatar-mini">${report.reporterName.charAt(0)}</div>
                        <div class="reporter-details">
                            <span class="reporter-name">${report.reporterName}</span>
                            <span class="report-time">${thaiDate}</span>
                        </div>
                    </div>
                </div>
                <div class="report-card-actions">
                    ${actionButtonsHTML}
                </div>
            </article>
        `;
    });

    grid.innerHTML = html;
    lucide.createIcons();
}

// Copy summary to clipboard optimized for Line/social chat rooms
function copyReportSummaryToClipboard(reportId) {
    const reports = DB.getReports();
    const rep = reports.find(r => r.id === reportId);
    if (!rep) return;

    const urgencyEmojis = { normal: "🟢 ปกติ", warning: "🟡 ควรระวัง", urgent: "🔴 เร่งด่วนที่สุด!" };
    const categoryNames = { security: "🛡️ รปภ./ความปลอดภัย", it: "💻 ไอทีและเครือข่าย", maintenance: "🛠️ ซ่อมบำรุงอาคาร", general: "📌 บริการทั่วไป" };
    const dateFormatted = formatThaiDateString(rep.timestamp);

    const summaryText = `📢 [สรุปรายงานการตรวจเวร]
━━━━━━━━━━━━━━━━━━━━
📌 หัวข้อ: ${rep.title}
📍 จุดตรวจ/สถานที่: ${rep.location}
🏷️ หมวดหมู่: ${categoryNames[rep.category] || "ทั่วไป"}
⚠️ ระดับความด่วน: ${urgencyEmojis[rep.urgency] || "ปกติ"}
⏱️ วันและเวลา: ${dateFormatted}
👤 ผู้รายงาน: ${rep.reporterName}
━━━━━━━━━━━━━━━━━━━━
📄 บันทึกรายละเอียด:
"${rep.description}"

*ตรวจสอบและรับข้อมูลผ่านระบบ DutyReport Pro*`;

    navigator.clipboard.writeText(summaryText).then(() => {
        alert("📋 คัดลอกสรุปข้อความรายงานเวรไปยังคลิปบอร์ดแล้ว! คุณสามารถกดวาง (Paste) ส่งต่อเข้ากลุ่มไลน์ได้ทันที");
    }).catch(err => {
        console.error("Could not copy text: ", err);
    });
}

// Delete report function
function handleDeleteReport(reportId) {
    if (confirm("🚨 คุณแน่ใจหรือไม่ว่าต้องการลบรายการรายงานเวรนี้? การกระทำนี้ไม่สามารถย้อนคืนได้")) {
        const reports = DB.getReports();
        const updated = reports.filter(r => r.id !== reportId);
        
        DB.saveReports(updated);
        alert("✅ ลบรายงานเวรออกจากระบบเรียบร้อยแล้ว");
        
        // Refresh grid
        renderReportsList();
    }
}

// Admin change report verification state directly
function handleAdminChangeStatus(reportId, newStatus) {
    const reports = DB.getReports();
    const index = reports.findIndex(r => r.id === reportId);
    
    if (index !== -1) {
        reports[index].status = newStatus;
        DB.saveReports(reports);
        
        // Highlight status change success
        renderReportsList();
    }
}

// ==========================================================================
// ADMIN USER MANAGEMENT & DIRECT ACCOUNT CREATION
// ==========================================================================
function renderAdminUsers() {
    const users = DB.getUsers();
    
    // Total Badge
    document.getElementById("admin-total-users-badge").textContent = `${users.length} คน`;

    const tableBody = document.getElementById("admin-users-table-body");
    let html = "";

    users.forEach(user => {
        const userRoleText = user.role === 'admin' ? "ผู้ควบคุมเวร (Admin)" : "เจ้าหน้าที่เวร (Member)";
        const userRoleClass = user.role === 'admin' ? "badge badge-secondary" : "badge badge-primary";
        
        // Format creation date
        const regDate = new Date(user.registerDate);
        const dateStr = regDate.toLocaleDateString('th-TH');

        // Delete user logic (protect default seed accounts and logged admin)
        let deleteBtnHTML = "";
        const isDefaultSeed = user.email === 'admin@duty.com' || user.email === 'member@duty.com';
        const isSelf = user.email === currentUser.email;

        if (!isDefaultSeed && !isSelf) {
            deleteBtnHTML = `
                <button class="btn btn-outline btn-xs text-danger" onclick="handleAdminDeleteUser('${user.email}')" title="ลบสมาชิกคนนี้">
                    <i data-lucide="user-minus" style="width: 14px; height: 14px;"></i>
                </button>
            `;
        } else {
            deleteBtnHTML = `<span class="text-muted text-xs">ล็อกระบบ</span>`;
        }

        html += `
            <tr>
                <td>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <div class="avatar-mini" style="font-weight: 700;">${user.name.charAt(0)}</div>
                        <div>
                            <div style="font-weight: 600;">${user.name}</div>
                            <div class="text-muted text-xs">เข้าร่วม: ${dateStr}</div>
                        </div>
                    </div>
                </td>
                <td class="text-secondary">${user.email}</td>
                <td><span class="${userRoleClass}">${userRoleText}</span></td>
                <td>${deleteBtnHTML}</td>
            </tr>
        `;
    });

    tableBody.innerHTML = html;
    lucide.createIcons();
}

// Admin delete account directly
function handleAdminDeleteUser(email) {
    if (confirm(`🚨 คุณต้องการลบสมาชิกบัญชีอีเมล ${email} ออกจากสารบบฐานข้อมูลผู้ใช้ใช่หรือไม่?`)) {
        const users = DB.getUsers();
        const updated = users.filter(u => u.email !== email);
        
        DB.saveUsers(updated);
        alert(`✅ ลบบัญชีผู้ใช้งาน ${email} เรียบร้อยแล้ว`);
        
        renderAdminUsers();
    }
}

// Admin registers new user directly
function handleAdminCreateUser(event) {
    event.preventDefault();
    const name = document.getElementById("admin-user-name").value.trim();
    const email = document.getElementById("admin-user-email").value.trim().toLowerCase();
    const pass = document.getElementById("admin-user-pass").value;
    const role = document.getElementById("admin-user-role").value;

    const users = DB.getUsers();
    
    // Validation email duplicate
    if (users.some(u => u.email === email)) {
        alert("⚠️ บัญชีอีเมลนี้มีอยู่ในระบบแล้ว! กรุณาใช้อีเมลอื่น");
        return;
    }

    const newUser = {
        name: name,
        email: email,
        password: pass,
        role: role,
        registerDate: new Date().toISOString()
    };

    users.push(newUser);
    DB.saveUsers(users);

    alert(`🎉 เพิ่มบัญชีสำหรับคุณ ${name} สำเร็จเรียบร้อย! สามารถใช้อีเมลนี้ล็อกอินได้ทันที`);

    // Reset inputs
    document.getElementById("admin-create-user-form").reset();
    renderAdminUsers();
}

// ==========================================================================
// IMAGE EXPAND (LIGHTBOX) CONTROLLERS
// ==========================================================================
function openLightbox(imageSrc, captionText) {
    const lightbox = document.getElementById("image-lightbox");
    const lightboxImg = document.getElementById("lightbox-expanded-img");
    const lightboxCap = document.getElementById("lightbox-caption");

    lightbox.classList.remove("hidden");
    lightboxImg.src = imageSrc;
    lightboxCap.textContent = captionText || "ไม่มีรูปภาพคำอธิบาย";
}

function closeLightbox() {
    const lightbox = document.getElementById("image-lightbox");
    lightbox.classList.add("hidden");
}
