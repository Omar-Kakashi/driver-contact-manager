// Pre-populated driver data
const initialDriversData = [
    { captainCode: "2431691", driverId: "Muhammad Mansoor", vehicleId: "1/67498", phoneNo: "971509154787", hotelName: "Pullman", originalPhone: "971509154787" },
    { captainCode: "3823350", driverId: "Waqar Ahmad", vehicleId: "1/64779", phoneNo: "971503583084", hotelName: "Pullman", originalPhone: "971503583084" },
    { captainCode: "3792556", driverId: "Ghulam Rasool", vehicleId: "1/70535", phoneNo: "97150669955", hotelName: "Pullman", originalPhone: "971 50 669 8955" },
    { captainCode: "3240670", driverId: "Tausif Noor", vehicleId: "1/69448", phoneNo: "971971544079511", hotelName: "Pullman", originalPhone: "971971544079511" },
    { captainCode: "3151171", driverId: "Noor Ahmad", vehicleId: "3/62046", phoneNo: "971563096659", hotelName: "Pullman", originalPhone: "971563096659" },
    { captainCode: "2562132", driverId: "Mehmood Ayaz", vehicleId: "4/48919", phoneNo: "971526626496", hotelName: "Pullman", originalPhone: "971526626496" },
    { captainCode: "3184333", driverId: "Muhammad Jamil", vehicleId: "1/64324", phoneNo: "971555621309", hotelName: "Pullman", originalPhone: "971555621309" },
    { captainCode: "3648699", driverId: "Muneer Ahmed", vehicleId: "4/46373", phoneNo: "971526470639", hotelName: "Pullman", originalPhone: "971526470639" },
    { captainCode: "3334710", driverId: "Shahbaz Ali", vehicleId: "1/69421", phoneNo: "971562851712", hotelName: "Pullman", originalPhone: "971562851712" },
    { captainCode: "3046142", driverId: "Khyadar Afridi", vehicleId: "4/39066", phoneNo: "971588017141", hotelName: "Pullman", originalPhone: "971588017141" },
    { captainCode: "3192476", driverId: "Shafiq Iqbal", vehicleId: "1/68965", phoneNo: "971521378481", hotelName: "Pullman", originalPhone: "971521378481" },
    { captainCode: "2928962", driverId: "Hamza El Aissaoui", vehicleId: "4/42541", phoneNo: "971568949337", hotelName: "Pullman", originalPhone: "971568949337" },
    { captainCode: "2015437", driverId: "hasseb samir", vehicleId: "1/ 69418", phoneNo: "971567607023", hotelName: "Pullman", originalPhone: "971567607023" },
    { captainCode: "3788649", driverId: "Abdul Jabbar Hazrat", vehicleId: "22517", phoneNo: "971555770419", hotelName: "Pullman", originalPhone: "971555770419" },
    { captainCode: "2070229", driverId: "Muhammad Salman", vehicleId: "2/58393", phoneNo: "971503340270", hotelName: "Pullman", originalPhone: "971503340270" },
    { captainCode: "2070198", driverId: "Nadeem Khan", vehicleId: "1/64539", phoneNo: "971569554354", hotelName: "Pullman", originalPhone: "971569554354" },
    { captainCode: "2238953", driverId: "Ayan Khan", vehicleId: "4/33964", phoneNo: "971565531457", hotelName: "Pullman", originalPhone: "971565531457" },
    { captainCode: "3809403", driverId: "Irfan Said", vehicleId: "1/69420", phoneNo: "97156363102", hotelName: "Pullman", originalPhone: "971 56 136 3102" },
    { captainCode: "3648732", driverId: "Asad Ali", vehicleId: "4/49324", phoneNo: "971565724546", hotelName: "Pullman", originalPhone: "971565724546" },
    { captainCode: "3826622", driverId: "Shams Maaroof", vehicleId: "1/69459", phoneNo: "97156865734", hotelName: "Pullman", originalPhone: "971 56 865 0734" },
    { captainCode: "3792528", driverId: "Muhammad Awais", vehicleId: "1/70545", phoneNo: "971556301648", hotelName: "Pullman", originalPhone: "971556301648" },
    { captainCode: "2032048", driverId: "Ahmed Ibrahim Ragab", vehicleId: "1/70639", phoneNo: "971551100803", hotelName: "Pullman", originalPhone: "971551100803" },
    { captainCode: "3195402", driverId: "Iftikhar Ali", vehicleId: "4/43746", phoneNo: "971569026627", hotelName: "Pullman", originalPhone: "971569026627" },
    { captainCode: "1949579", driverId: "Sakhawat Shah", vehicleId: "4/23062", phoneNo: "971566187204", hotelName: "Pullman", originalPhone: "971566187204" },
    { captainCode: "3664597", driverId: "Afzal Khan", vehicleId: "4/46235", phoneNo: "971563038715", hotelName: "Pullman", originalPhone: "971563038715" },
    { captainCode: "3582716", driverId: "Mian Gul Bahre", vehicleId: "1/70597", phoneNo: "971521445124", hotelName: "Pullman", originalPhone: "971521445124" },
    { captainCode: "3686724", driverId: "Fazal Ali Toor", vehicleId: "4/26106", phoneNo: "971547415339", hotelName: "Pullman", originalPhone: "971547415339" },
    { captainCode: "3796507", driverId: "Saqlain Nasarat", vehicleId: "4/33283", phoneNo: "971551099494", hotelName: "Pullman", originalPhone: "971551099494" },
    { captainCode: "2251643", driverId: "Rasool Khan", vehicleId: "64326", phoneNo: "971505856415", hotelName: "Pullman", originalPhone: "971505856415" },
    { captainCode: "3049759", driverId: "Momin Khan", vehicleId: "3/62018", phoneNo: "971545024535", hotelName: "Pullman", originalPhone: "971545024535" },
    { captainCode: "3270329", driverId: "Kifayat Ullah", vehicleId: "1/68960", phoneNo: "971582872811", hotelName: "double tree", originalPhone: "971582872811" },
    { captainCode: "2555361", driverId: "Haissam Ahmed", vehicleId: "1/68946", phoneNo: "97152119173", hotelName: "double tree", originalPhone: "971 52 511 9173" },
    { captainCode: "3514291", driverId: "Tabin Pervaiz", vehicleId: "3/98574", phoneNo: "971562729098", hotelName: "double tree", originalPhone: "971562729098" },
    { captainCode: "3348724", driverId: "Saqib Khan", vehicleId: "4/24728", phoneNo: "971547047243", hotelName: "double tree", originalPhone: "971547047243" },
    { captainCode: "1598411", driverId: "Shahid Noor", vehicleId: "4/41098", phoneNo: "971529510215", hotelName: "double tree", originalPhone: "971529510215" },
    { captainCode: "3706471", driverId: "Amir Ali Essa", vehicleId: "4/48757", phoneNo: "97156737872", hotelName: "Corniche hotel", originalPhone: "971 56 737 5872" },
    { captainCode: "3019653", driverId: "Samad Ali", vehicleId: "1/68954", phoneNo: "971563302785", hotelName: "Corniche hotel", originalPhone: "971563302785" },
    { captainCode: "1992271", driverId: "Muhammad Waleed Riaz", vehicleId: "1/70516", phoneNo: "971509062498", hotelName: "Corniche hotel", originalPhone: "971509062498" },
    { captainCode: "2897410", driverId: "Walid Said", vehicleId: "4/34265", phoneNo: "971505976109", hotelName: "Al Bait Hotel", originalPhone: "971505976109" },
    { captainCode: "1958608", driverId: "Muhammad Azam Akhtar", vehicleId: "1/64293", phoneNo: "971542672400", hotelName: "Al Bait Hotel", originalPhone: "971542672400" },
    { captainCode: "3293857", driverId: "Khalid Iqbal", vehicleId: "4/42127", phoneNo: "97152892013", hotelName: "Al Bait Hotel", originalPhone: "971 52 189 2013" },
    { captainCode: "3748888", driverId: "Bilal Hussain", vehicleId: "1/70495", phoneNo: "971528265192", hotelName: "Al Bait Hotel", originalPhone: "971528265192" },
    { captainCode: "3178019", driverId: "Muhammad Ayaz", vehicleId: "1/69430", phoneNo: "971581619202", hotelName: "Al Bait Hotel", originalPhone: "971581619202" },
    { captainCode: "3258505", driverId: "Waqar Ali", vehicleId: "4/42566", phoneNo: "971503748408", hotelName: "Al Bait Hotel", originalPhone: "971503748408" },
    { captainCode: "2956547", driverId: "Ahmad Shahid", vehicleId: "4/46925", phoneNo: "971555334825", hotelName: "Holiday International Hotel", originalPhone: "971555334825" },
    { captainCode: "634456", driverId: "Muhammad Saleem", vehicleId: "1/70618", phoneNo: "971564165666", hotelName: "Holiday International Hotel", originalPhone: "971564165666" },
    { captainCode: "3788650", driverId: "Haider Nawaz", vehicleId: "4/46340", phoneNo: "97152778023", hotelName: "Holiday International Hotel", originalPhone: "971 52 877 8023" },
    { captainCode: "2070269", driverId: "Ali Ijaz", vehicleId: "1/68935", phoneNo: "971566963808", hotelName: "Sheraton Hotel", originalPhone: "971566963808" },
    { captainCode: "3707218", driverId: "Faqeer Muhammad", vehicleId: "4/23649", phoneNo: "971507837542", hotelName: "Sheraton Hotel", originalPhone: "971507837542" },
    { captainCode: "2686300", driverId: "Azzeddine Laayoune", vehicleId: "1/71619", phoneNo: "971561446388", hotelName: "Sheraton Hotel", originalPhone: "971561446388" },
    { captainCode: "2251609", driverId: "Muzahir Ali", vehicleId: "4/24410", phoneNo: "971558879792", hotelName: "Golden Sands Hotel", originalPhone: "971558879792" }
];

let driversData = [];
let filteredData = [];

// File input handler
document.getElementById('fileInput').addEventListener('change', handleFileUpload);
document.getElementById('searchInput').addEventListener('input', handleSearch);
document.getElementById('saveBtn').addEventListener('click', saveList);
document.getElementById('addDriverBtn').addEventListener('click', showAddDriverForm);
document.getElementById('cancelAddBtn').addEventListener('click', hideAddDriverForm);
document.getElementById('addDriverForm').addEventListener('submit', handleAddDriver);

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
    
    contactList.innerHTML = `
        <div class="table-container">
            <table class="drivers-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Captain Code</th>
                        <th>Driver Name</th>
                        <th>Vehicle ID</th>
                        <th>Phone Number</th>
                        <th>Hotel Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${dataToDisplay.map((driver, index) => `
                        <tr>
                            <td>${index + 1}</td>
                            <td><strong>${driver.captainCode || 'N/A'}</strong></td>
                            <td>${driver.driverId || 'N/A'}</td>
                            <td>${driver.vehicleId || 'N/A'}</td>
                            <td>${driver.originalPhone || 'N/A'}</td>
                            <td><span class="hotel-tag">${driver.hotelName || 'N/A'}</span></td>
                            <td>
                                <div class="action-buttons">
                                    <a href="tel:${driver.phoneNo}" class="btn btn-call" onclick="trackAction('call', '${driver.captainCode}')">
                                        📞 Call
                                    </a>
                                    <a href="https://wa.me/${driver.phoneNo}" target="_blank" class="btn btn-whatsapp" onclick="trackAction('whatsapp', '${driver.captainCode}')">
                                        💬 WhatsApp
                                    </a>
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
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
    } else {
        // Load initial data if no saved data exists
        driversData = [...initialDriversData];
        saveToLocalStorage();
    }
    
    filteredData = [...driversData];
    const saveDate = localStorage.getItem('saveDate');
    if (saveDate) {
        const date = new Date(saveDate);
        document.getElementById('fileName').textContent = `Last saved: ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    } else {
        document.getElementById('fileName').textContent = `${driversData.length} drivers loaded`;
    }
    displayContacts();
    showSearchSection();
}

function saveList() {
    saveToLocalStorage();
    alert('✅ List saved successfully! It will be available when you return.');
}

function showSearchSection() {
    document.getElementById('searchSection').style.display = 'flex';
}

function showAddDriverForm() {
    document.getElementById('addDriverModal').style.display = 'flex';
}

function hideAddDriverForm() {
    document.getElementById('addDriverModal').style.display = 'none';
    document.getElementById('addDriverForm').reset();
}

function handleAddDriver(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const newDriver = {
        captainCode: formData.get('captainCode'),
        driverId: formData.get('driverId'),
        vehicleId: formData.get('vehicleId'),
        phoneNo: cleanPhoneNumber(formData.get('phoneNo')),
        hotelName: formData.get('hotelName'),
        originalPhone: formData.get('phoneNo')
    };
    
    driversData.unshift(newDriver); // Add to beginning of array
    filteredData = [...driversData];
    saveToLocalStorage();
    displayContacts();
    hideAddDriverForm();
    
    // Show success message
    alert('✅ Driver added successfully!');
}

// Show empty state initially
displayContacts();
