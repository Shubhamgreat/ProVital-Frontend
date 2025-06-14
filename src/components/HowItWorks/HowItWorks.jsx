import React, { useRef, useState } from "react";
import { cardsData } from "../../utils/constants/cardsData";
import "./HowItWorks.css";
import {
    NutritionBadgeIcon,
    PhysicalActivityBadgeIcon,
    RestorativeSleepBadgeIcon,
    StressManagementBadgeIcon,
    SocialConnectionBadgeIcon,
    SubstanceAbuseBadgeIcon,
} from "../icons/BadgeIcons";

const HowItWorks = () => {
    const categories = ["All", "Nutrition", "Physical activity", "Restorative sleep", "Stress management", "Social connection", "Substance abuse"];
    const [category, setCategory] = useState(categories[0]);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    let cardsCount = useRef(0);
    const cardsContainerRef = useRef(null);

    const getBadgeContent = (card) => {
        switch (card?.title) {
            case "Nutrition":
                return {
                    icon: <NutritionBadgeIcon />,
                    text: card?.duration,
                    unit: card?.unit,
                };
            case "Physical activity":
                return {
                    icon: <PhysicalActivityBadgeIcon />,
                    text: card?.duration,
                    unit: "minutes",
                };
            case "Restorative sleep":
                return {
                    icon: <RestorativeSleepBadgeIcon />,
                    text: card?.duration,
                    unit: "hours",
                };
            case "Stress management":
                return {
                    icon: <StressManagementBadgeIcon />,
                    text: card?.duration,
                    unit: card?.unit,
                };
            case "Social connection":
                return {
                    icon: <PhysicalActivityBadgeIcon />,
                    text: "Feeling",
                    unit: "good",
                };
            case "Substance abuse":
                return {
                    icon: <SubstanceAbuseBadgeIcon />,
                    text: card?.duration,
                    unit: card?.unit,
                };
            default:
                return {
                    icon: "❤️",
                    text: card?.duration,
                    unit: card?.unit,
                };
        }
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        const slider = cardsContainerRef.current;
        setStartX(e.pageX - slider.offsetLeft);
        setScrollLeft(slider.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const slider = cardsContainerRef.current;
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    };

    const moveCards = (val) => {
        if (cardsContainerRef.current) {
            cardsContainerRef.current.scrollLeft += val * 700;
        }
    };

    return (
        <section className="how-it-works">
            <div className="container">
                <div className="how-it-works__header">
                    <h2>
                    <span className="howitworks-label">HOW IT WORKS</span>
                    <span className="howitworks-main-row" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span className="howitworks-gradient" style={{ textTransform: 'none', fontSize: 'inherit' }}>Lifestyle as medicine:</span>
                        <span className="howitworks-secondary" style={{ fontSize: 'inherit'  ,  }}>The six pillars</span>
                    </span>
</h2>

                    {(category === "All" || cardsCount.current > 4) && (
                        <div className="how-it-works__nav">
                            <button type="button" className="how-it-works__nav-button" aria-label="Previous" onClick={() => moveCards(-1)}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button type="button" className="how-it-works__nav-button" aria-label="Next" onClick={() => moveCards(1)}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>

                <div className="how-it-works__categories">
                    {categories?.map((data, index) => (
                        <button
                            key={index}
                            className={`how-it-works__category ${data === category ? "active" : ""}`}
                            onClick={() => {
                                cardsCount.current = 0;
                                setCategory(data);
                            }}>
                            {data}
                        </button>
                    ))}
                </div>

                <div
                    ref={cardsContainerRef}
                    className={`how-it-works__cards ${isDragging ? "grabbing" : ""}`}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}>
                    {cardsData.map((card) => {
                        if (card.title === category || category === "All") {
                            cardsCount.current += 1;
                            const badgeContent = getBadgeContent(card);

                            return (
                                <div key={card?.id} className="how-it-works__card">
                                    <div className="card-image-container">
                                        <img src={card?.image} alt={card?.title} className="card-image" draggable="false" />
                                        <div className="card-badge">
                                            <span className="badge-icon">{badgeContent.icon}</span>
                                            <span className="badge-text">{badgeContent.text}</span>
                                            <span className="badge-unit">{badgeContent.unit}</span>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <h3>{card?.title}</h3>
                                        <p>{card?.description}</p>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
