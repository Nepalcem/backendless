import React, { Suspense } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import './TabSwitcher.css';

export default function TabSwitcher({ dbData }) {
  const navigate = useNavigate();
  const location = useLocation();

   const handleTabClick = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div className="main">
      <h1>TabSwitcher || Michael Lykhovyd</h1>
      <ul className="tablist">
        {dbData.map((item) => (
          <li
            key={item.id}
            className={`tab ${
              location.pathname.includes(item.id) ? "active" : ""
            }`}
            onClick={() => handleTabClick(item.id)}
          >
            <Link to={`/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
