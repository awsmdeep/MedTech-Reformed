import './sidebar.css'

const SideBar = ({setcomponentSelected}) => {
  
 const handleClick = (element) =>{
    setcomponentSelected(element);
 }
    
  return (
    <aside id='sidebar' className='sidebar'>
        <ul className='sidebar-nav' id='sidebar-nav'>

            <li className='nav-item'>
                <a onClick={() => {handleClick("Dashboard")}} className='nav-link'>
                    <i className='bi bi-grid'></i>
                    <span>Dashboard</span>
                </a>
            </li>


            <li className='nav-item'>
                <a onClick={() => {handleClick("Labs")}} className='nav-link collapsed' data-bs-target="#components-nav" data-bs-toggle="collapse" href='#'>
                    <i className='bi bi-heart-pulse'></i>
                    <span>Lab Tests</span>
                </a>
            </li>

            <li className='nav-item'>
                <a onClick={() => {handleClick("Medical History")}} className='nav-link collapsed' data-bs-target="#components-nav" data-bs-toggle="collapse" href='#'>
                    <i className='bi bi-clipboard2-pulse'></i>
                    <span>Medical History</span>
                </a>
            </li>

            <li className='nav-item'>
                <a onClick={() => {handleClick("Reminders")}} className='nav-link collapsed' data-bs-target="#components-nav" data-bs-toggle="collapse" href='#'>
                    <i className='bi bi-chat-left-dots'></i>
                    <span>Reminders</span>
                </a>
            </li>

            <li className='nav-item'>
                <a onClick={() => {handleClick("Doctors Recommendation")}} className='nav-link collapsed' data-bs-target="#components-nav" data-bs-toggle="collapse" href='#'>
                    <i className='bi bi-person-walking'></i>
                    <span>Doctors Recommendation</span>
                </a>
            </li>

            <li className='nav-item'>
                <a onClick={() => {handleClick("Profile")}} className='nav-link collapsed' data-bs-target="#components-nav" data-bs-toggle="collapse" href='#'>
                    <i className='bi bi-person-fill'></i>
                    <span>Profile</span>
                </a>
            </li>

            <li className='nav-item'>
                <a onClick={() => {handleClick("Forms")}} className='nav-link collapsed' data-bs-target="#forms-nav" data-bs-toggle="collapse" href='#'>
                    <i className='bi bi-journal-text'></i>
                    <span>Forms</span>
                    <i className='bi bi-chevron-down ms-auto'></i>
                </a>
                <ul id='forms-nav' className='nav-content collapse' data-bs-parent="#sidebar-nav">
                    <li>
                        <a href='#'>
                            <i className='bi bi-circle'></i>
                            <span>Application Form</span>
                        </a>
                    </li>

                    <li>
                        <a href='#'>
                            <i className='bi bi-circle'></i>
                            <span>Release Form</span>
                        </a>
                    </li>

                    <li>
                        <a href='#'>
                            <i className='bi bi-circle'></i>
                            <span>Cancellation Form</span>
                        </a>
                    </li>
                </ul>
            </li>

        </ul>
    </aside>
  )
};

export default SideBar;