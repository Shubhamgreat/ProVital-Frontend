import { useParams, Link } from "react-router";

const Details = () => {
    const { problems, location, insurance } = useParams();

    return (
        <div className="details-container">
            <div className="details-heading">The user's details are:</div>

            <div className="detail-block">
                <p className="detail-label">Condition, procedure, specialty:</p>
                <h2 className="detail-item">{problems}</h2>
            </div>

            <div className="detail-block">
                <p className="detail-label">City, state, or zipcode:</p>
                <h2 className="detail-item">{location}</h2>
            </div>

            <div className="detail-block">
                <p className="detail-label">Insurance carrier:</p>
                <h2 className="detail-item">{insurance}</h2>
            </div>

            <Link to={"/"}>Go Back</Link>
        </div>
    );
};

export default Details;
