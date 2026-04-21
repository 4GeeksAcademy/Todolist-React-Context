import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";

export const Card = ({ contact }) => {

    return (
        <div className="card" >
            <div className="row g-0">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <img src="https://media.biobiochile.cl/wp-content/uploads/2017/02/captura-de-pantalla-de-2017-02-01-155150-e1485975198440-730x350.png" />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">{contact.name}</h5>
                        <p className="card-text"><i className="bi bi-geo-alt-fill"></i>{contact.address}</p>
                        <p className="card-text"><i className="bi bi-telephone-fill"></i>{contact.phone}</p>
                        <p className="card-text"><i className="bi bi-envelope-fill"></i>{contact.email}</p>
                    </div>
                </div>
                <div className="col-md-2 d-flex justify-content-center align-items-center gap-3 fs-5">
                    <Link to={`/edit-contact/${contact.id}`}>
                        <i class="fa-solid fa-pencil"></i>
                    </Link>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#contact_${contact.id}`}>
                        <i class="fa-solid fa-trash"></i>
                    </button>
                    <Modal id={contact.id} />
                </div>
            </div>
        </div>
    )
}