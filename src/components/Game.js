import React from "react";
// styled components
import styled from "styled-components";
import { motion } from 'framer-motion';
import { popup } from '../animations';
// Redux
import { useDispatch } from 'react-redux';
import { loadGameDetails } from "../actions/gameDetailsAction";

import { Link } from "react-router-dom";
import { smallImage } from '../util';

const Game = ( {name, released, id, image} ) => {
    const stringPathId = id.toString();
    // Load game details
    const dispatch = useDispatch();
    const loadGameDetailsHandler = () => {
        document.body.style.overflow = 'hidden';
        dispatch(loadGameDetails(id))
    }
    return (
        <StyledGame variants={popup} initial="hidden" animate="show" layoutId={stringPathId} onClick={loadGameDetailsHandler}>
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
                <motion.p layoutId={`date-rating ${stringPathId}`}>{released}</motion.p>
                <motion.img layoutId={`image ${stringPathId}`} src={smallImage(image, 640)} alt={name}/>
            </Link>
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
min-height: 30vh;
box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
text-align: center;
border-radius: 1rem;
overflow: hidden;
cursor: pointer;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`;

export default Game;