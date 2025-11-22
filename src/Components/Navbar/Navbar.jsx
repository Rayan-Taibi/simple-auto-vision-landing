import React from 'react'

import './Navbar.css'
const Navbar = () => {
  return (
    <div className="nav">
        <div className="nav-logo">
           <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE5ElEQVR4nO1ZS0ijVxT+cAZfIL4WYjK40424EKqOuhIfC7GlHYbiTk1XQ+ujWFpNVFxk2kIpOHSKIILtQoXaKaVufG10I0ihVqPQKmhtok6SqiDGOKKnnJv7D7ET89/E38kU8sHBy8397z3fveece+4RiCOOOIxAAoD7AKwAngFwADgA8ELKgez7EUA3gDL5TcxxD8AXAJwAKEL5G8DnAMyxUDwbwCCAs1DKDQ8P0/HxMaWnpwvhNvddQ8QP4FsAWa9L+UYA3nC7OzMzQ+fn59TY2CiE29yncyIeAO/fpuJ35a7rmsfCwgJNTU3R2NgYjY+Pi/b8/LyqaT2VaxmKFACTqva9tLRE7e3ttL29LYTb3BeBf/wi1zQEdwD8xBPn5+dTcXGxrgKrq6vU3NxMo6OjQrjNfeG+SUhIoMHBQcrLy9P6Jo06CWE2FRUV5Pf76fLykoqKisIqU1VVRVlZWZSTkyOE29wX7pv+/n46OTn579zfGOGwZDKZaGdnh6qrq0U02d/fp4ODAyovL480dIaU2tpauri4oNbWVuro6BD+kp2drf3+MFrlOax5kpKSaHFxkdra2qigoIBcLhc1NDTQ+vo62e32K4rwTlssFpqbmxPjzs7OhHB7dnaWWlpaKDMz88o3ZrOZ3G43+Xw+8nq9tLm5KU6isLBQG+OVYTs606mvrxe7w7a8trYmwmJJSYlQKjc3VyySkpJCfX19dHp6SnpgRXt6esQ3AKimpoaOjo5oaGiISktLaWNjQxCtq6ujysrKqE3pXvAlxSQODw9pb2+PysrKaGtrSyys7SCfhoa1X4m++5rI2kL0qOF6IrwZZrNZzJGYmCj+TkxMiI1ZXl4WvjYwMBB82UV0Y3N6cOWoOQI5HA6xeGdn50vl+dgZ+06iLz8mstRclXDweDwvSbBZMtjkRkZGgk1Ik8eqynOStRPK2dLS0oQvaGaj7fwfK0Qfvfuq8noEtJNITk6m1NRUEYk0QiHEKUO6Lu6rRA62eW3nr1NehQDDarWqRqxSFQI2vYk42vh8AYcNZTaREvD5fK9Ep2vkMxUC4tYNJxwqNYcNp7wqAQbf1goEJlQIOPQm4jjP4GhjFIHp6WkVAisqBP7Rm2h3d1csyqHSKAIul0uFAKfcugj5SAkWzokYj942joDf71ch4DeUgAr0CH74TmAc3+JGEVA2ISMI2CzGm5CuE3NiZhSB7wcC4/jVZpQTP9ObiJMtowis/xYY19TUpELgBxUCVr2J+NLhy+emBL76JDCG58rIyFAh8KkKAS466U7W29t7IwKt7xE9dwXGdHV1qSjP8taNkrlg4QSME7FoCLQ9IPpzNfC7w+EQcyko/1ck1TyumOlOypkjp8SREGCzccsg5vF4xHNVcfftiPBB41clob0TQoEvu54PAtFGc1gGVylM6sqzLiZECC73KS3AJmCz2ZQcm8d0d3cTv7WhOD+AJ4jyUe+OYBERnTir5MTM6XSKG5uF29zHoVIx2lCQPAeQiSjBtUqKsTzADfE0hsoPwADcUbmdb0EmjSzypsiC6+tS/mcji7sa7soC020r/0S1+hAtHsrIYLTi+0Y4rCoy5WkoXXY6cip3PQMxgElWzHRzp2tyGzuAXLwBSJBFpy5Z+liRL7szKdz+Xf7GtZ2SN+XfrHHEgf85/gULpWNENHZprAAAAABJRU5ErkJggg==" alt="bmw--v1"/>
           <span>M Performance</span>        
        </div>

        <ul className='nav-menu'>
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li className='contact'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar