import React from 'react'
import "./component/Preloading.css"
import "./component/1.png"


import  reactlogo2 from "./component/2.png";
import Example from './component/Text1';
import Example3 from './component/Text3';
import Example2 from './component/Text2';
export const Preloadingpage = () => {
  
  return (<div><body>
    <div className='background'>
    <div className='logo'><img src={reactlogo2} alt="react logo"  height={"50px"}
       style={{
 

alignItems:'center',
objectPosition:'center',
justifyItems:'center',
objectFit: 'cover',

    }}/></div>
<div className ="Prisma" style={{
position: "relative",        

alignItems:'center',
objectPosition:'center',
justifyItems:'center',
objectFit: 'cover',
              

    }}>
<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393.34 231.37">
  <defs>
    <style>
      
    </style>
  </defs>
  <g>
    <path class="cls-6" d="m107.49,3.73c9.38.13,14.61,2.14,15.68,6.04.88.76,1.32,1.48,1.32,2.17h-.38c0,.19.76,1.23,2.27,3.12,0,.82.09,3.46.28,7.93-1.01,5.1-7.08,11.81-18.23,20.12-.5,0-2.52,1.35-6.04,4.06-4.97,3.15-7.68,4.72-8.12,4.72-3.27,2.77-5.07,4.16-5.38,4.16l-6.61,3.4c0,.25-.09.38-.28.38h-.66c-.44,0-.85-.13-1.23-.38-.38.25-.82.38-1.32.38v.28c.88,0,1.32.22,1.32.66v.28c-.76,0-2.46.63-5.1,1.89,0,.32-.32.63-.94.94l-.57-.28c0,.88-1.7,2.02-5.1,3.4,0-.38-.19-.57-.57-.57h-.38c0,1.64-1.67,3.09-5.01,4.34-.44.63-2.64,1.79-6.61,3.49,0,.19-2.11,1.45-6.33,3.78-.76,1.51-1.7,3.72-2.83,6.61-.32,1.07-.72,1.92-1.23,2.55l.28.57c0,1.26-.41,1.89-1.23,1.89l.28.66c-.38.06-.57.28-.57.66.19.38.28.69.28.94-.38,0-1.01.72-1.89,2.17l.28.66c-1.26,1.51-1.89,3.27-1.89,5.29-2.2,4.41-4.91,10.83-8.12,19.27-.38.44-1.23,2.65-2.55,6.61l-2.17,4.06c-1.01,3.27-2.17,6.01-3.49,8.22,0,.5-.41,1.54-1.23,3.12-4.47,10.08-7.74,18.26-9.82,24.56h-.28c-2.08-.95-3.65-2.11-4.72-3.49-4.34-2.33-6.55-4.09-6.61-5.29v-.38c0-2.71,4.5-13.28,13.51-31.73.31,0,.85-1.38,1.61-4.16.76-.69,2.33-3.93,4.72-9.73.38,0,.79-.63,1.23-1.89l-.28-.66c1.7-5.23,2.96-7.84,3.78-7.84v-2.55c1.45-1.38,2.17-2.64,2.17-3.78.38,0,.82-1.04,1.32-3.12.63,0,.94-.53.94-1.61,0-.38-.54-.57-1.61-.57-1.26,1.07-3.78,2.33-7.56,3.78-1.39,1.26-4.63,2.93-9.73,5.01l-.66-.94v-1.23l.28-.66c-.63-.13-.94-.98-.94-2.55h.38l-.38-.57v-.66c0-.19.13-.28.38-.28-.44-1.76-.98-2.93-1.61-3.49.44,0,.66-.22.66-.66l-.66-.94c0-1.83,1.16-2.96,3.49-3.4,0-.25.09-.38.28-.38.38.25.69.38.94.38,5.04-2.96,9.13-4.44,12.28-4.44h.28v.28c-1.26.25-1.89.57-1.89.94v.38c.88,0,1.32.19,1.32.57,1.26-.63,2.71-1.76,4.34-3.4v-.38l-.28-.57.66-.38h.28c0,1.26.63,1.89,1.89,1.89,1.7-1.2,2.55-2.33,2.55-3.4-.44-.25-.76-.38-.94-.38v-.57c1.07,0,2.2-1.07,3.4-3.21,1.2-.63,3.31-5.23,6.33-13.79,0-.82.63-1.89,1.89-3.21.38-1.89.79-2.83,1.23-2.83h.38v.66h.28c0-.5.09-.91.28-1.23-.25,0-.57-.31-.94-.94.44,0,1.2-1.79,2.27-5.38l-.38-.66c.82-.76,1.45-2.01,1.89-3.78.38,0,.69-.5.94-1.51l-.28-1.89c.19,0,.28-.13.28-.38-.19,0-.28-.09-.28-.28-6.3,3.02-11.87,6.08-16.72,9.16-.82.38-1.54.57-2.17.57-1.01-3.9-1.73-6.11-2.17-6.61l.28-1.51c-.57,0-.98-.85-1.23-2.55,0-1.7,2.2-3.9,6.61-6.61,2.9-2.01,7.3-3.9,13.22-5.67,0-.76,2.83-2.23,8.5-4.44.5,0,1.01-.31,1.51-.94h.94c2.2-1.76,3.68-3.65,4.44-5.67l2.55-1.89v.38c-.63,1.01-.94,1.83-.94,2.46v1.32l.94-.66c.19,0,.28.09.28.28.19,0,.82-.41,1.89-1.23l.66.28,2.83-.57v.57c1.38,0,2.83-.63,4.34-1.89l1.89.38c.44,0,.66-.31.66-.94.25,0,.57.09.94.28,7.56-1.7,11.33-2.86,11.33-3.49l1.61.38c0-.44.31-.66.94-.66l.57.28c0-.57,3.9-1.2,11.71-1.89ZM22.49,80.89h1.23c.44,0,.66-.22.66-.66v-.57h-.94c-.32,0-.63.41-.94,1.23Zm1.51,31.83v.28h.38c.44,0,.76-.53.94-1.61-.38,0-.82.44-1.32,1.32Zm.94-1.89c.25,0,.38.09.38.28.31-.19.82-.28,1.51-.28-.19-.31-.28-.94-.28-1.89h-.28c-.38,0-.82.63-1.32,1.89Zm4.16.57l-.66.94c.06.44.28.66.66.66.25,0,.57-.31.94-.94l-.94-.66Zm16.34-51.28v1.23h.28v-1.23h-.28Zm3.78-9.44c0,.25-.09.57-.28.94h.57v-.94h-.28Zm.66,9.44l-.38,1.23c.44,0,.66-.31.66-.94v-.28h-.28Zm0-11.99v.94c.82-.31,1.23-.63,1.23-.94h-1.23Zm1.23,9.16c-.44,1.13-.66,1.76-.66,1.89v.28h.38c0-.31.19-.94.57-1.89v-.28h-.28Zm1.23-14.45c0,.69-.09,1.2-.28,1.51h1.23l-.28-.57c.19-.44.28-.76.28-.94h-.94Zm1.89,6.23c0,.38-.19.82-.57,1.32v.57h.28c.44,0,.76-.63.94-1.89h-.66Zm-.28-9.44v.94c.44,0,.66-.19.66-.57v-.38h-.66Zm54.12-21.34h-.57v-.66c-.25,0-.57.09-.94.28l-1.61-.28v.66h.94c0,.38-.22.57-.66.57l-.94-.57-.57.28-2.83-.66c0,.44-1.57.88-4.72,1.32,0,.19-.13.28-.38.28-.19,0-.28-.09-.28-.28-7.43,1.64-12.88,2.99-16.34,4.06-.44-.19-.76-.28-.94-.28-2.27,1.64-4.06,2.46-5.38,2.46-1.89,2.9-2.83,4.47-2.83,4.72-.25,0-.88.94-1.89,2.83.19.44.28.76.28.94-.88,0-1.7,1.57-2.46,4.72-2.14,2.77-3.21,4.97-3.21,6.61-1.83,3.9-2.96,6.64-3.4,8.22-.57.63-1.64,3.05-3.21,7.27l.38,1.51c-1.26,1.01-1.89,2.71-1.89,5.1h.28c1.07-.88,1.7-1.32,1.89-1.32,1.13.25,2.08.38,2.83.38.63-.76,1.98-1.38,4.06-1.89l.38-.66c-1.07-.25-1.61-.57-1.61-.94,0-.19.09-.28.28-.28-.38-.69-.57-1.23-.57-1.61.76-1.07,1.38-1.61,1.89-1.61l-.38-.57c2.01-1.26,3.08-2.01,3.21-2.27l.28.66c-.32,0-.63.32-.94.94h.28c1.13,0,2.71-.94,4.72-2.83v-.28h-.28l-1.23.94h-.66l.28-.66v-.28l-.57.28h-.66v-.28l.28-2.27h.94v1.32c.57-.44,1.1-.66,1.61-.66v-.94h-.94v-.66c.38,0,1.23-.19,2.55-.57.76,1.45,2.01,2.17,3.78,2.17v-.28l-.38-1.32,4.16-2.17v-.28c-.69,0-1.23-.13-1.61-.38,0,1.13-1.35,1.98-4.06,2.55h-.38v-.28l.38-.66c-.25,0-.38-.09-.38-.28l.66-.38h1.61c0-.63.82-1.26,2.46-1.89.25-.63.88-.94,1.89-.94l.66.94-.28.66c.19,0,.28.09.28.28,1.26-.44,2.42-1.16,3.49-2.17h.28c.44.06.66.28.66.66-.44.06-.66.25-.66.57v.38h.28c1.51-1.26,2.68-1.89,3.49-1.89.44,0,.66.32.66.94.25,0,.57-.31.94-.94-.63,0-.94-.22-.94-.66,1.01-.82,1.83-1.23,2.46-1.23l-.28-2.27h-.66c-.88.63-1.7.94-2.46.94,0-.19-.13-.28-.38-.28,0,.88-.5,1.51-1.51,1.89h-1.61v-.66c.57,0,1.29-.63,2.17-1.89,8.63-5.1,15.77-10.23,21.44-15.39,4.34-4.28,6.55-6.58,6.61-6.89,0-.5-.85-.94-2.55-1.32v-.28c.38-.19.82-.28,1.32-.28,0-.38-.63-.69-1.89-.94-.44,0-1.07.5-1.89,1.51,0-.69-.13-1.2-.38-1.51-1.26.13-1.89.44-1.89.94Zm-45.33,47.79v1.32c.63,0,.94-.53.94-1.61-.38.19-.69.28-.94.28Zm1.32-3.4v.57c.06.44.25.66.57.66v-.66c0-.38-.19-.57-.57-.57Zm2.17-6.99h.28v.38c0,.38-.19.57-.57.57l-.38-.57.66-.38Zm9.16,1.32c-.88-.25-1.64-.38-2.27-.38-.38.25-.69.38-.94.38l.66.94c-.32,0-1.04.41-2.17,1.23.19.38.28.69.28.94.69-.44,1.32-.66,1.89-.66,0,.25.09.38.28.38.06-.44.28-.66.66-.66h.28v.28c0,.32-.72.85-2.17,1.61v.66h.28c3.15-1.26,5.16-2.33,6.04-3.21,0,.25.09.38.28.38l.28-.66v-.66h-.28l-.94.66c-.44,0-.66-.22-.66-.66l.38-1.51h-.38l-1.51.94Zm.57.57h.38v.38c0,.38-.22.57-.66.57h-.28v-.28c.06-.44.25-.66.57-.66Zm9.82-6.23l1.51-.38h.94c0-.38,1.38-1.42,4.16-3.12l.28-.66h-.28c-3.84,1.7-6.04,3.09-6.61,4.16Zm4.34-.94v.57c.25,0,.57.13.94.38,0-.5.13-.94.38-1.32h-.38c-.38.25-.69.38-.94.38Zm2.83-4.44v.66c.44,0,.66.19.66.57h.28c.44,0,.66-.19.66-.57-.63,0-.94-.22-.94-.66h-.66Zm.38-4.72c.38.5.57.91.57,1.23h.38c.38,0,.57-.19.57-.57l-.94-.66h-.57Zm1.23,6.89v.38c.06.38.28.57.66.57l.57-.94v-.57h-.57c-.44.06-.66.25-.66.57Zm2.17-1.51c.88,0,1.32.19,1.32.57h.57v-.57c0-.44-.19-.66-.57-.66h-.66c-.44.06-.66.28-.66.66Z"/>
    <path class="cls-6" d="m102.68,92.7c.25,0,.38.13.38.38l1.89-.38h6.04c1.38,0,2.27.5,2.64,1.51l1.89-.38h.38c.69,1.26,1.2,1.89,1.51,1.89v.38c0,.5-.5.76-1.51.76v.76c1.26.19,1.89.57,1.89,1.13v.38c-.25,1.2-2.39,2.46-6.42,3.78v.38h-3.02c0,.94-2.14,2.08-6.42,3.4-.32.76-2.46,1.89-6.42,3.4-6.49,4.79-11.27,9.57-14.36,14.36-5.67,8.12-11.46,17.82-17.38,29.09-.76,1.01-1.51,1.51-2.27,1.51-.88,0-2.39-.76-4.53-2.27-5.1-1.89-8-3.53-8.69-4.91v-.76c2.39-3.08,5.16-10.14,8.31-21.16,1.64-2.64,2.64-5.29,3.02-7.93.38-.06,1.26-2.58,2.64-7.56.5,0,.76-.5.76-1.51h.76l-.38.76v1.13h.38c3.53-7.18,6.04-11.58,7.56-13.22l3.02-3.02,1.51.38c1.83-.25,2.83-.38,3.02-.38,1.13,0,2.64,1.64,4.53,4.91l14.36-6.42h1.51c.88,0,2.01-.12,3.4-.38Z"/>
    <path class="cls-6" d="m130.82,89.77c1.13,0,2.9,1.01,5.29,3.02,2.46.94,4.34,1.95,5.67,3.02v.76l-9.07,19.27c-1.32,2.2-3.46,8.63-6.42,19.27-.63.5-1.76,4.03-3.4,10.58-.32,0-1.45,2.39-3.4,7.18-.44,1.76-1.07,2.64-1.89,2.64-.38,0-2.39-1.38-6.04-4.16-1.51,0-2.27-.5-2.27-1.51l-.76.38c-2.27-.5-3.4-1.13-3.4-1.89v-.76c1.39-3.84,3.78-9.38,7.18-16.62,0-1.26,1.26-4.15,3.78-8.69.63,0,1.26-.25,1.89-.76h.38c0,.76.25,1.13.76,1.13,1.01-2.01,1.64-3.02,1.89-3.02.38,1.01.76,1.51,1.13,1.51,0-.38.5-.88,1.51-1.51.06.5.31.75.76.75,0-.25.12-.38.38-.38.76.82,1.13,1.45,1.13,1.89-.25.51-.38.88-.38,1.13h1.13c.5-1.76.76-3.27.76-4.53,0-.5-.25-.76-.76-.76v1.51h-.76v-1.51c0-.38.38-.75,1.13-1.13-.25-.31-.38-.94-.38-1.89l1.51-.76-.38-.75c.25-1.76.63-2.64,1.13-2.64l-.38-.76v-.38c.06-.5.31-.76.76-.76h.38c-.25.5-.38.88-.38,1.13v.38h.38c.19-1.51.44-2.27.76-2.27l-.38-.76c1.26-3.71,1.89-5.73,1.89-6.04-1.01.38-1.51.76-1.51,1.13.25,0,.38.13.38.38l-.76.38c0-.25-.13-.38-.38-.38l.38-.76v-.38h-1.89c0,1.7-.5,2.83-1.51,3.4h-.38c0-.44.25-1.2.76-2.27-.25-.44-.38-.94-.38-1.51l.38-.76-.76-.38c-.44,1.76-.94,2.64-1.51,2.64h-.38v-.76l.76-1.13-.76-1.13c1.89-6.55,4.03-9.82,6.42-9.82Zm-16.62,40.42c0-.25-.13-.38-.38-.38,0,.38-.25.88-.76,1.51v.38h.76v-.76h1.89c.5,0,.76-.25.76-.76s-.25-.75-.76-.75h-.38l-1.13.75Zm2.27-1.89l.76.38v-1.13c-.5.06-.76.31-.76.75Zm1.89-12.84h.38v.76c0,.5-.25.76-.76.76l-.38-.76c.06-.5.31-.76.76-.76Zm-.38,20.4v.76c.38,0,.88-.5,1.51-1.51v-.38h-.38c-.38,0-.76.38-1.13,1.13Zm.76-9.07v1.13h.76v-1.13h-.76Zm.38,6.42v1.13c.5,0,.76-.25.76-.76v-.38h-.76Zm.76-22.67h.76v2.27c-.5,0-.76-.25-.76-.76v-1.51Zm4.91,12.84l-.76,1.13-1.51-.76c-1.13,2.21-1.76,3.34-1.89,3.4l.38.76-.38,1.89h1.13c0-.69.63-1.32,1.89-1.89v.38c.5-.25.88-.38,1.13-.38v-1.89c1.01-1.26,1.51-2.01,1.51-2.27-.57,0-1.07-.12-1.51-.38Zm-.76-20.78h.38v2.27c-.5.63-.76,1.26-.76,1.89h-1.51v-.38c0-.69.63-1.95,1.89-3.78Zm1.51,9.44h.38v.76c-.82,4.03-1.7,6.04-2.64,6.04h-.38v-.76h.76l-.38-1.89v-.76c.88,0,1.38-1.01,1.51-3.02l.76-.38Zm.76-6.42h.38v1.13c0,.5-.25.76-.76.76s-.76-.25-.76-.76c0-.38.38-.76,1.13-1.13Zm.76,2.27c.5.06.76.32.76.76-.32,1.26-.69,1.89-1.13,1.89h-.38v-1.89c.06-.5.31-.76.76-.76Zm2.27-7.93v.76h.76c.5,0,.76-.25.76-.76v-.38c-.44.25-.94.38-1.51.38Zm.76,3.4h.38v.76h-1.13c.06-.5.31-.76.76-.76Zm1.13-52.13h.38c-.25.5-.38.88-.38,1.13h-.76v-.38c.06-.5.31-.76.76-.76Zm12.09-18.13c1.64,0,3.02,1.01,4.16,3.02l1.89-.38c2.39.69,4.16,1.57,5.29,2.64-.32,3.02-.69,4.53-1.13,4.53,0,.94,1.38,1.95,4.16,3.02l1.13,1.51-.76,6.42c.5.06.76.32.76.76-.25.44-.38.94-.38,1.51,3.27.57,4.91,1.32,4.91,2.27,0,1.7-1.64,3.72-4.91,6.04v.38l.38,1.89c-.44,0-1.2.76-2.27,2.27-4.85-3.53-7.62-5.29-8.31-5.29-2.39,2.77-4.16,4.16-5.29,4.16-1.7-.63-3.97-2.77-6.8-6.42-.94,0-1.83-.63-2.64-1.89-1.01,0-1.76-.63-2.27-1.89,0-1.07.38-2.08,1.13-3.02-.5-.82-.76-1.45-.76-1.89,1.26-3.53,2.39-5.54,3.4-6.04.06.5.31.76.76.76l.38-.76v-1.13c1.7-2.27,2.71-4.16,3.02-5.67h.38v-.76l-1.13.76h-.38c0-2.71,1.64-4.97,4.91-6.8h.38Z"/>
    <path class="cls-6" d="m182.01,89.21c2.64,0,4.25,2.39,4.82,7.18.25,0,.38.13.38.38v1.61c0,2.9-1.45,4.34-4.34,4.34-5.29,0-11.27,1.73-17.94,5.19-1.89,1.26-2.83,2.08-2.83,2.46,0,.69,3.46,1.2,10.39,1.51,7.24,1.51,12.03,3.78,14.36,6.8,1.26,0,2.99,4.66,5.19,13.98,0,1.83-1.61,3.27-4.82,4.34,0,1.32-3.46,2.64-10.39,3.97-4.09.5-6.74,1.17-7.93,1.98l-1.98-.38c0,.63-.66,1.04-1.98,1.23v-.38c-.88.51-1.54.76-1.98.76v-1.61c.5,0,1.17-.54,1.98-1.61.44.32.98.47,1.61.47,0-.57.53-1.38,1.61-2.46-.32-.5-.47-.88-.47-1.13,1.51-.63,2.99-1.7,4.44-3.21h-1.23c-.63.51-2.9,1.04-6.8,1.61-.19.57-2.17,1.48-5.95,2.74v.85c.25.5.38.88.38,1.13-.25,0-.38.16-.38.47h.38l1.61-1.23h1.23l-1.23,1.61c.63,0,1.04,1.2,1.23,3.59-2.2,2.14-9.51,5.19-21.91,9.16,0,.19-.41.57-1.23,1.13l-.76-.38h-.85c0,1.32-1.86,2.27-5.57,2.83l-2.74-6.04c.25-.5.38-.88.38-1.13-.25-.5-.38-.91-.38-1.23.25,0,.38-.12.38-.38-.38,0-.79-.41-1.23-1.23l.85-1.13c-.82-.82-1.89-2.42-3.21-4.82,1.2-1.26,7.18-3.24,17.94-5.95.44.25.98.38,1.61.38,0-.38.53-.79,1.61-1.23.5.32.88.47,1.13.47.13-.57.41-.85.85-.85h.38c.25,0,.38.13.38.38,2.96-.76,4.56-1.13,4.82-1.13h.76c0,.76.41,1.13,1.23,1.13.06-.5.31-.76.76-.76.57.88.85,1.54.85,1.98h.76l3.59-1.61v1.23h1.23v-1.61h-.85c2.64-1.76,3.97-3.08,3.97-3.97-1.01,0-1.51-1.07-1.51-3.21h-6.04c-5.48,0-9.57-1.86-12.28-5.57,0-1.13-.16-2.58-.47-4.34l.47-2.08c-1.89-3.65-2.83-6.04-2.83-7.18v-1.13h-.76v-1.23l1.98-2.36.76.38,3.97-3.59.85.38c0-.44,1.2-1.1,3.59-1.98,1.51-2.39,2.96-3.59,4.34-3.59,0,.25.13.38.38.38,0-1.95,5.6-4.06,16.81-6.33h6.71Zm-26.63,52.23v.38h.76v-1.23c-.5.06-.76.35-.76.85Zm7.93-2.46v.47c0,.51-.25.76-.76.76h-1.23c0-.44.66-.85,1.98-1.23Zm.38-4.72c.25.5.38.88.38,1.13l1.98-.38v-.38c0-.57-.25-.85-.76-.85-.44.32-.98.47-1.61.47Z"/>
    <path class="cls-6" d="m210.72,127.27c-2.52,0-3.78-.88-3.78-2.64v-7.84c0-1.83,1.29-2.74,3.87-2.74h33.62c2.58,0,3.87.91,3.87,2.74v7.84c0,1.76-1.26,2.64-3.78,2.64h-33.81Z"/>
  </g>
  
  
  
  <g>
    <path class="cls-6" d="m376.97,10.79c-1.29-.69-3.98-.43-3.35-2.61,3.03-10.44-3.14-4.59-6.83-4.17-6.31.73-9.64,11.51-17.99,5.24-.33-.25-1.58.36-2.17.84-7.4,6.13-16.7,5.37-25.34,6.86-21.77,3.76-43.53,7.51-62.64,19.62-2.55,1.62-5.96,2.63-6.4,7.06,5.84-.12,10.11-3.62,14.91-5.52,3.34-1.32,6.29-2.54,9.96-.61,6.71,3.53,13.03,7.55,18.8,12.45,2.9,2.46,3.03,3.77-.45,6.38-9.25,6.96-18.27,14.4-23.51,25.11-5.08,10.38-3.08,22.24,4.37,28.01,8.27,6.39,20.95,5.56,29.88-2.24,2.61-2.28,5-4.98,6.85-7.89,6.31-9.92,8.57-20.41,5.18-32.14-4.12-14.26-2.99-16.17,8.51-20.25.45,27.16-8.54,54.99,4.78,82.54,2.51-3.33,1.49-5.1.7-7.15-2.53-6.58-3.07-13.91-.87-20.13,2.54-7.19,4.54-14.82,5.29-21.86,1.65-15.43,4.92-30.45,7.98-45.55.95-4.68,1.45-9.59,4.04-13.79.85-1.38,2.46-2.5,4.13-1.84,2.37.94.64,2.64.32,4.02-7.51,32.5-12.57,65.28-11.95,98.79.35,19.18,2.41,37.87,12.37,54.86,1.51,2.58,3.22,4.94,5.59,6.82,1.6,1.27,2.97.83,4.36-.24,1.02-.78,1.09-1.74.4-2.77-5.59-8.36-8.98-17.36-8.06-27.61-1.76-.63-2.53-1.67-1.46-3.47-1.53-7.43-2.41-14.92-2.14-22.51.99-27.31,3.94-54.38,10.75-80.91,2.54-9.89,2.87-20.53,9.15-29.28.63-2.78,1.98-5,4.81-6.04Zm-64.75,72.17c-.11,6.97-1.28,13.96-7.82,17.52-5.06,2.75-10.68,6.81-17.14,2.21-6.33-4.5-9.53-12.88-8.07-20.78,1.66-9.02,9-13.07,15.42-17.77,9.21-6.76,10.08-6.38,14.44,4,1.99,4.73,3.49,9.59,3.17,14.82Zm18.39-54.55c-1.33,7.84-4.52,11.93-11.85,14.91-5.47,2.22-8.16.36-10.69-3.29-3-4.34-5.79-8.76-10.23-12.67,8.88-1.61,17.8-3.07,26.64-4.88,5.4-1.11,7.31-1,6.13,5.93Z"/>
    <path class="cls-6" d="m386.41,8.38c-1.34-.28-2.97.86-4.48,1.37,2.77,1.94.79,3.77-.14,5.62,1.83-.29,3.72-.41,5.48-.94,1.66-.5,4.18-.42,4.06-3.03-.14-3.01-3.11-2.65-4.93-3.03Z"/>
    <path class="cls-6" d="m381.94,9.76c-1.23,2.36-2.76,3.28-4.96,1.04-.38,2.98-2.84,4.32-4.81,6.04,3.4.74,6.48-.62,9.64-1.46,0,0,0,0,0,0,0,0,0,0,0,0-.71-1.89.62-3.73.14-5.62Z"/>
  </g>
</svg></div>
<div style={{
 

 
     }}>
<div className='top1'></div>
<div><div class="textanime">
<p>Departmental Magazine</p>
</div></div>
<div class="textanime">
<p>by</p>
</div>


    <div className='top2'><Example2/> </div>
    <div className='top3'><Example3/> </div>
    <div className='top1'><Example/> </div>
    </div>
    </div>
    </body>
</div>
    
  )
}

export default Preloadingpage