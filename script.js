let driversData = [];
let filteredData = [];

// File input handler
document.getElementById('fileInput').addEventListener('change', handleFileUpload);
document.getElementById('searchInput').addEventListener('input', handleSearch);
document.getElementById('saveBtn').addEventListener('click', saveList);

// Load saved data on page load
window.addEventListener('load', loadSavedData);

function handleFileUpload(event) {
    const file = event.target.files[0];
    
    if (!file) {
        return;
    }

    document.getElementById('fileName').textContent = file.name;

    const reader = new FileReader();
    
    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            
            // Get the first sheet
            const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
            
            // Convert to JSON
            const jsonData = XLSX.utils.sheet_to_json(firstSheet);
            
            // Process the data
            processDriverData(jsonData);
        } catch (error) {
            alert('Error reading file: ' + error.message);
        }
    };
    
    reader.readAsArrayBuffer(file);
}

function processDriverData(data) {
    driversData = data.map((row, index) => {
        // Handle different possible column name variations
        const captainCode = row['Captain Code'] || row['captain code'] || row['CAPTAIN CODE'] || '';
        const driverId = row['Driver Id'] || row['driver id'] || row['DRIVER ID'] || '';
        const vehicleId = row['Vehicle Id'] || row['vehicle id'] || row['VEHICLE ID'] || '';
        const phoneNo = row['Phone NO'] || row['phone no'] || row['PHONE NO'] || row['Phone No'] || '';
        const hotelName = row['hotel name'] || row['Hotel Name'] || row['HOTEL NAME'] || '';
        
        return {
            captainCode,
            driverId,
            vehicleId,
            phoneNo: cleanPhoneNumber(phoneNo),
            hotelName,
            originalPhone: phoneNo
        };
    });
    
    filteredData = [...driversData];
    saveToLocalStorage();
    displayContacts();
    showSearchSection();
}

function cleanPhoneNumber(phone) {
    // Remove all non-digit characters
    const cleaned = String(phone).replace(/\D/g, '');
    return cleaned;
}

function displayContacts() {
    const contactList = document.getElementById('contactList');
    
    const dataToDisplay = filteredData.length > 0 ? filteredData : driversData;
    
    if (dataToDisplay.length === 0) {
        contactList.innerHTML = `
            <div class="empty-state">
                <h2>No contacts found</h2>
                <p>Please upload an Excel file with driver information</p>
            </div>
        `;
        return;
    }
    
    contactList.innerHTML = dataToDisplay.map((driver, index) => {
        const initial = driver.captainCode ? String(driver.captainCode).charAt(0).toUpperCase() : '👤';
        
        return `
            <div class="contact-card">
                <div class="contact-header">
                    <div class="avatar">${initial}</div>
                    <div class="contact-info">
                        <div class="contact-name">${driver.captainCode || 'Unknown'}</div>
                        <div class="contact-details">
                            ${driver.driverId ? `<div>ID: ${driver.driverId}</div>` : ''}
                            ${driver.vehicleId ? `<div>Vehicle: ${driver.vehicleId}</div>` : ''}
                            ${driver.hotelName ? `<div>Hotel: ${driver.hotelName}</div>` : ''}
                            ${driver.originalPhone ? `<div>📱 ${driver.originalPhone}</div>` : ''}
                        </div>
                    </div>
                </div>
                <div class="action-buttons">
                    <a href="tel:${driver.phoneNo}" class="btn btn-call" onclick="trackAction('call', '${driver.captainCode}')">
                        📞 Call
                    </a>
                    <a href="https://wa.me/${driver.phoneNo}" target="_blank" class="btn btn-whatsapp" onclick="trackAction('whatsapp', '${driver.captainCode}')">
                        💬 WhatsApp
                    </a>
                </div>
            </div>
        `;
    }).join('');
}

function trackAction(action, name) {
    console.log(`${action} initiated for ${name}`);
}

function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filteredData = [...driversData];
    } else {
        filteredData = driversData.filter(driver => {
            return (
                String(driver.captainCode).toLowerCase().includes(searchTerm) ||
                String(driver.driverId).toLowerCase().includes(searchTerm) ||
                String(driver.vehicleId).toLowerCase().includes(searchTerm) ||
                String(driver.hotelName).toLowerCase().includes(searchTerm) ||
                String(driver.originalPhone).toLowerCase().includes(searchTerm)
            );
        });
    }
    
    displayContacts();
}

function saveToLocalStorage() {
    localStorage.setItem('driversData', JSON.stringify(driversData));
    localStorage.setItem('saveDate', new Date().toISOString());
}

function loadSavedData() {
    const saved = localStorage.getItem('driversData');
    if (saved) {
        driversData = JSON.parse(saved);
        filteredData = [...driversData];
        const saveDate = localStorage.getItem('saveDate');
        if (saveDate) {
            const date = new Date(saveDate);
            document.getElementById('fileName').textContent = `Loaded from ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
        }
        displayContacts();
        showSearchSection();
    }
}

function saveList() {
    saveToLocalStorage();
    alert('✅ List saved successfully! It will be available when you return.');
}

function showSearchSection() {
    document.getElementById('searchSection').style.display = 'flex';
}

// Show empty state initially
displayContacts();
