// ServiceItem.jsx
import React from 'react';
import './services.scss';

const ServiceItem = ({ img, title, body, alt }) => {
    return (
        <div className="service-item">
            <img src={img} alt={alt || title} />
            <div>
                <h3 className="h3">{title}</h3>
                <p className="body">{body}</p>
            </div>
        </div>
    );
};

export default ServiceItem;