
import React from 'react';
import {Button} from 'react-bootstrap';
import {useState} from 'react';
import classes from './../styles/Calculate.module.scss';

//dropdown menu referenced from https://react-bootstrap.github.io/components/dropdowns/

function Calculate (){
    const [total, setTotal] = useState(0);
    function addTotal(price){
        setTotal(function(prev){
            return prev+price;
        })
    }
    function minusTotal(price){
      setTotal(function(prev){
        if ((prev-price)>=0){
            return prev-price;
        }
        console.log(0)
        return 0;
      })
    }

    function addGroomSm(){addTotal(70)}
    function minusGroomSm(){minusTotal(70)}
    function addGroomLg(){addTotal(100)}
    function minusGroomLg(){minusTotal(100)}

    function addWashSm(){addTotal(50)}
    function minusWashSm(){minusTotal(50)}
    function addWashLg(){addTotal(80)}
    function minusWashLg(){minusTotal(80)}

    function addTickSm(){addTotal(100)}
    function minusTickSm(){minusTotal(100)}
    function addTickLg(){addTotal(150)}
    function minusTickLg(){minusTotal(150)}

    return(
        <div className={classes.main}>
            <h1 className={classes.main__header}>Total: ${total}</h1>

            <div className={classes.main__buttonGroup}>
                <p className={classes.main__buttonGroup__p}> Full Groom - Small Breed &#40;10-40lbs&#41;</p>
                <Button onClick={addGroomSm} className={classes.main__buttonGroup__btn} variant="secondary">+</Button> 
                <Button onClick={minusGroomSm} className={classes.main__buttonGroup__btn} variant="secondary">-</Button>
            </div>
            <div className={classes.main__buttonGroup}>
                <p className={classes.main__buttonGroup__p}> Full Groom - Large Breed &#40;41-100lbs&#41;</p> 
                <Button onClick={addGroomLg} className={classes.main__buttonGroup__btn} variant="secondary">+</Button> 
                <Button onClick={minusGroomLg} className={classes.main__buttonGroup__btn} variant="secondary">-</Button>
            </div>
            <div className={classes.main__buttonGroup}>
                <p className={classes.main__buttonGroup__p}> Bath and Trim - Small Breed &#40;10-40lbs&#41; </p>
                <Button onClick={addWashSm} className={classes.main__buttonGroup__btn} variant="secondary">+</Button> 
                <Button onClick={minusWashSm} className={classes.main__buttonGroup__btn} variant="secondary">-</Button>
            </div>
            <div className={classes.main__buttonGroup}>
                <p className={classes.main__buttonGroup__p}> Bath and Trim - Large Breed &#40;41-100lbs&#41; </p>
                <Button onClick={addWashLg} className={classes.main__buttonGroup__btn} variant="secondary">+</Button> 
                <Button onClick={minusWashLg} className={classes.main__buttonGroup__btn} variant="secondary">-</Button>
            </div>
            <div className={classes.main__buttonGroup}>
                <p className={classes.main__buttonGroup__p}> Flea and Tick Treament - Small Breed &#40;10-40lbs&#41; </p>
                <Button onClick={addTickSm} className={classes.main__buttonGroup__btn} variant="secondary">+</Button> 
                <Button onClick={minusTickSm} className={classes.main__buttonGroup__btn} variant="secondary">-</Button>
            </div>
            <div className={classes.main__buttonGroup}>
                <p className={classes.main__buttonGroup__p}> Flea and Tick Treament - Large Breed &#40;41-100lbs&#41; </p>
                <Button onClick={addTickLg} className={classes.main__buttonGroup__btn} variant="secondary">+</Button> 
                <Button onClick={minusTickLg} className={classes.main__buttonGroup__btn} variant="secondary">-</Button>
            </div>
        </div>
    );
  }

export default Calculate;

/*

*/