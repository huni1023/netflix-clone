import axios from 'axios';
import React, { useEffect, useState } from 'react';
import logo from './colaandedm.png';
import './CoLA.css';


export function CoLA_Unggi( {title, CoLAURL}) {
    const papers_Unggi= [
        {
          title:"Theory and Learning Analytics",
          href:"https://dndrl.notion.site/1-Theory-and-Learning-Analytics-2f08bb791bc24e61b1167622774ebd8a"
        },
        {
          title:"Measurement and its Uses in Learning Analytics",
          href:"https://dndrl.notion.site/3-Measurement-and-its-Uses-in-Learning-Analytics-8526f30e370b4b7598eec8a0b9150f02"
        },
        {
          title:"Multimodal Learning Analytics",
          href:"https://dndrl.notion.site/11-Multimodal-Learning-Analytics-c024e1a428764826ae913a00a62bdc9a"
        },
      ]

  return (
      <div className='PAPER__title'>
        <h2>{title}</h2>
        <div className='ROW__PAPERs'>
            {papers_Unggi.map(paper => ( 
                <img 
                key = {paper.title}
                onClick={ () => window.open(paper.href)}
                className='ROW__PAPER'
                src = {logo}
                />
            ))}
        </div>
  </div>);
}


export function CoLA_Huni({title, CoLAURL}) {
    const papers_Huni= [
        {
          title:"자연어처리",
          href:"https://dndrl.notion.site/8-c7e0bdacb5f84caa9c9f5abbff9a8376"
        },
        {
          title:"example of Theory-based approach: ENA",
          href:"https://dndrl.notion.site/example-of-Theory-based-approach-ENA-c36f11cf705a405bb145cd34c60efe6b"
        },
        {
          title:"Professional LA",
          href:"https://dndrl.notion.site/Professional-LA-4f32209f39f542ecb8dc091f0b614d76"
        },
      ]

  return (
      <div className='PAPER__title'>
        <h2>{title}</h2>
        <div className='ROW__PAPERs'>
            {papers_Huni.map(paper => ( 
                <img 
                key = {paper.title}
                onClick={ () => window.open(paper.href)}
                className='ROW__PAPER'
                src = {logo}
                />
            ))}
        </div>
  </div>);
}

// export default CoLA2021;
// export {CoLA2021, CoLA2022};
// export default {CoLA2021, CoLA2022};
// export function CoLA2021;
// export function CoLA2022