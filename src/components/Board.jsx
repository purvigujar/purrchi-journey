import React, { useState, useEffect, timeoutRef, useRef } from 'react';
import './Board.css';
import Button from 'react-bootstrap/Button';
import Tile0 from './Tile0';
import Tile1 from './Tile1';
import Tile2 from './Tile2';
import Tile3 from './Tile3';
import Tile4 from './Tile4';
import Tile5 from './Tile5';
import Tile6 from './Tile6';
import Tile7 from './Tile7';
import Tile8 from './Tile8';
import Tile9 from './Tile9';
import Tile10 from './Tile10';
import Tile11 from './Tile11';
import Tile12 from './Tile12';
import Tile13 from './Tile13';
import us1 from '../assets/chi-p-1.png';
import us2 from '../assets/chi-p-yipe.png';
import us3 from '../assets/chi-p-end.png';
import purvi from '../assets/purvi/p-front.png';

function Board() {

    const [show, setShow] = useState(false);
    const [currentTile, setCurrentTile] = useState(0);
    const [visitedTiles, setVisitedTiles] = useState([0]);
    const [imageIndex, setImageIndex] = useState(0);
      const timeoutRef = useRef(null);

    
    const handleClose = () => setShow(false);

    const handleBtnClick = () => {
  setCurrentTile((prevTile) => {
    const newTile = prevTile + 1;
    setVisitedTiles((prevVisited) => [...new Set([...prevVisited, newTile])]);
    return newTile;
  });
};

    useEffect(() => {
        if(currentTile >= 0 && currentTile <= 14) {
            setShow(true);
        }
    }, [currentTile]);

     useEffect(() => {
        if (currentTile === 0) {
            setShow(true);
            return;
        }

        if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        }

        setShow(false);

        timeoutRef.current = setTimeout(() => {
        setShow(true);
        }, 500); 

        return () => {
        clearTimeout(timeoutRef.current);
        };
    }, [currentTile]);


    const tile14images = [us1, us2, us3];


    useEffect(() => {
        if (currentTile === 14) {
            setImageIndex(0);
            let index = 0;
            const interval = setInterval(() => {
            index++;
            if (index < tile14images.length) {
                setImageIndex(index);
            } else {
                clearInterval(interval);
            }
            }, 5000);

            return () => clearInterval(interval);
        } else {
            setImageIndex(-1);
        }
    }, [currentTile]);


    const tileComponents = [
        <Tile0 show={show} handleClose={handleClose} />,
        <Tile1 show={show} handleClose={handleClose} />,
        <Tile2 show={show} handleClose={handleClose} />,
        <Tile3 show={show} handleClose={handleClose} />,    
        <Tile4 show={show} handleClose={handleClose} />,
        <Tile5 show={show} handleClose={handleClose} />,
        <Tile6 show={show} handleClose={handleClose} />,
        <Tile7 show={show} handleClose={handleClose} />,
        <Tile8 show={show} handleClose={handleClose} />,
        <Tile9 show={show} handleClose={handleClose} />,
        <Tile10 show={show} handleClose={handleClose} />,
        <Tile11 show={show} handleClose={handleClose} />,
        <Tile12 show={show} handleClose={handleClose} />,
        <Tile13 show={show} handleClose={handleClose} />,
    ];

     return(
        <>
            <div className="board">
                <div className={`tile ${visitedTiles.includes(0) ? 'visited' : 'unvisited'}`} id="tile-0" style={{width:"100px", height:"100px"}}>{currentTile === 0 && <img src="src/assets/chiraayu/chi-backwalk.png"/>}</div>
                <div className={`tile ${visitedTiles.includes(1) ? 'visited' : 'unvisited'}`} id="tile-1" style={{width:"100px", height:"100px"}}>{currentTile === 1 && <img src="src/assets/chiraayu/chi-backwalk.png"/>}</div>
                <div className={`tile ${visitedTiles.includes(2) ? 'visited' : 'unvisited'}`} id="tile-2" style={{width:"100px", height:"100px"}}>{currentTile === 2 && <img src="src/assets/chiraayu/chi-right.png"/>}</div>
                <div className={`tile ${visitedTiles.includes(3) ? 'visited' : 'unvisited'}`} id="tile-3" style={{width:"100px", height:"100px"}}>{currentTile === 3 && <img src="src/assets/chiraayu/chi-right2.png"/>}</div>
                <div className={`tile ${visitedTiles.includes(4) ? 'visited' : 'unvisited'}`} id="tile-4" style={{width:"100px", height:"100px"}}>{currentTile === 4 && <img src="src/assets/chiraayu/chi-backwalk.png"/>}</div>
                <div className={`tile ${visitedTiles.includes(5) ? 'visited' : 'unvisited'}`} id="tile-5" style={{width:"100px", height:"100px"}}>{currentTile === 5 && <img src="src/assets/chiraayu/chi-back.png"/>}</div>
                <div className={`tile ${visitedTiles.includes(6) ? 'visited' : 'unvisited'}`} id="tile-6" style={{width:"100px", height:"100px"}}>{currentTile === 6 && <img src="src/assets/chiraayu/chi-left.png"/>}</div>
                <div className={`tile ${visitedTiles.includes(7) ? 'visited' : 'unvisited'}`} id="tile-7" style={{width:"100px", height:"100px"}}>{currentTile === 7 && <img src="src/assets/chiraayu/chi-left2.png"/>}</div>
                <div className={`tile ${visitedTiles.includes(8) ? 'visited' : 'unvisited'}`} id="tile-8" style={{width:"100px", height:"100px"}}>{currentTile === 8 && <img src="src/assets/chiraayu/chi-left.png"/>}</div>
                <div className={`tile ${visitedTiles.includes(9) ? 'visited' : 'unvisited'}`} id="tile-9" style={{width:"100px", height:"100px"}}>{currentTile === 9 && <img src="src/assets/chiraayu/chi-end.png"/>}</div>
                <div className={`tile ${visitedTiles.includes(10) ? 'visited' : 'unvisited'}`} id="tile-10" style={{width:"100px", height:"100px"}}>{currentTile === 10 && <img src="src/assets/chiraayu/chi-backwalk.png"/>}</div>
                <div className={`tile ${visitedTiles.includes(11) ? 'visited' : 'unvisited'}`} id="tile-11" style={{width:"100px", height:"100px"}}>{currentTile === 11 && <img src="src/assets/chiraayu/chi-right.png"/>}</div>
                <div className={`tile ${visitedTiles.includes(12) ? 'visited' : 'unvisited'}`} id="tile-12" style={{width:"100px", height:"100px"}}>{currentTile === 12 && <img src="src/assets/chiraayu/chi-right2.png"/>}</div>
                <div className={`tile ${visitedTiles.includes(13) ? 'visited' : 'unvisited'}`} id="tile-13" style={{width:"100px", height:"100px"}}>{currentTile === 13 && <img src="src/assets/chiraayu/chi-right.png"/>}</div>
                <div className={`tile ${visitedTiles.includes(14) ? 'visited' : 'unvisited'}`} id="tile-14" style={{ width: "100px", height: "100px" }}>

                    {currentTile === 14 ? 
                        <img src={tile14images[imageIndex]} className="us" /> :
                        <img src = {purvi} />
                    }
                </div>

            </div>

            <Button className="next-btn" size="lg" onClick={handleBtnClick}>Next</Button>
            {tileComponents[currentTile]  && React.cloneElement(tileComponents[currentTile], { show, handleClose: () => setShow(false) })}
        </>
     )
}

export default Board;