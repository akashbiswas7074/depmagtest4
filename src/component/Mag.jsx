import HTMLFlipBook from "react-pageflip";
import React, { Component,useRef,useCallback, } from "react";

import Ab from "./13.jpeg";
import back from "./back1.png";
import reactLogo from "./1.png";
import back2 from "./3.png";
import backwall from "./backwall.png"
import Articles from "./technical/Articles.png";
import Drawings from "./technical/Drawings.png";
import Essays from "./technical/Essays.png";
import Photographs from "./technical/Photographs.png";
import Stories from "./technical/Stories.png";
import End from "./technical/end.png";
import Poem from "./technical/poem.png";
import facalty from "./technical/facalty.png";
import facalty2 from "./technical/facalty2.png";
import facalty3 from "./technical/facalty3.png";
import lead from "./technical/lead.png";
import lead2 from "./technical/lead2.png";
import poem1 from "./poemsnew/poem1.png";
import poem2 from "./poemsnew/poem2.png";
import poem3 from "./poemsnew/poem3.png";
import poem4 from "./poemsnew/poem4.png";
import poem5 from "./poemsnew/poem5.png";
import poem6 from "./poemsnew/poem6.png";
import poem7 from "./poemsnew/poem7.png";
import poem8 from "./poemsnew/poem8.png";
import poem9 from "./poemsnew/poem9.png";
import poem10 from "./poemsnew/poem10.png";
import poem11 from "./poemsnew/poem11.png";
import poem12 from "./poemsnew/poem12.png";
import poem13 from "./poemsnew/poem13.png";
import poem14 from "./poemsnew/poem14.png";
import poem15 from "./poemsnew/poem15.png";
import poem16 from "./poemsnew/poem16.png";
import shortstory1 from "./shortstorynew/shortstory1.png";
import shortstory2 from "./shortstorynew/shortstory2.png";
import shortstory3 from "./shortstorynew/shortstory3.png";
import shortstory4 from "./shortstorynew/shortstory4.png";
import shortstory5 from "./shortstorynew/shortstory5.png";
import shortstory6 from "./shortstorynew/shortstory6.png";
import shortstory7 from "./shortstorynew/shortstory7.png";
import shortstory8 from "./shortstorynew/shortstory8.png";
import shortstory9 from "./shortstorynew/shortstory9.png";
import shortstory10 from "./shortstorynew/shortstory10.png";
import shortstory11 from "./shortstorynew/shortstory11.png";
import shortstory12 from "./shortstorynew/shortstory12.png";
import shortstory13 from "./shortstorynew/shortstory13.png";
import shortstory14 from "./shortstorynew/shortstory14.png";
import shortstory15 from "./shortstorynew/shortstory15.png";
import technical1 from "./technical Arciticles/Technical Essays1.png";
import technical2 from "./technical Arciticles/Technical Essays2.png";
import technical3 from "./technical Arciticles/Technical Essays3.png";
import technical4 from "./technical Arciticles/Technical Essays4.png";
import technical5 from "./technical Arciticles/Technical Essays5.png";
import technical6 from "./technical Arciticles/Technical Essays6.png";
import technical7 from "./technical Arciticles/Technical Essays7.png";
import technical8 from "./technical Arciticles/Technical Essays8.png";
import technical9 from "./technical Arciticles/Technical Essays9.png";
import technical10 from "./technical Arciticles/Technical Essays10.png";
import technical11 from "./technical Arciticles/Technical Essays11.png";
import technical12 from "./technical Arciticles/Technical Essays12.png";
import technical13 from "./technical Arciticles/Technical Essays13.png";
import technical14 from "./technical Arciticles/Technical Essays14.png";
import technical15 from "./technical Arciticles/Technical Essays15.png";
import technical16 from "./technical Arciticles/Technical Essays16.png";
import technical17 from "./technical Arciticles/Technical Essays17.png";
import technical18 from "./technical Arciticles/Technical Essays18.png";
import technical19 from "./technical Arciticles/Technical Essays19.png";
import technical20 from "./technical Arciticles/Technical Essays20.png";
import technical21 from "./technical Arciticles/Technical Essays21.png";
import technical22 from "./technical Arciticles/Technical Essays22.png";
import technical23 from "./technical Arciticles/Technical Essays23.png";
import technicalA1 from "./technical/Technical Articles1.png";
import technicalA2 from "./technical/Technical Articles2.png";
import technicalA3 from "./technical/Technical Articles3.png";
import technicalA4 from "./technical/Technical Articles4.png";
import technicalA5 from "./technical/Technical Articles5.png";
import technicalA6 from "./technical/Technical Articles6.png";
import technicalA7 from "./technical/Technical Articles7.png";
import technicalA8 from "./technical/Technical Articles8.png";
import technicalA9 from "./technical/Technical Articles9.png";
import technicalA10 from "./technical/Technical Articles10.png";
import technicalA11 from "./technical/Technical Articles11.png";
import technicalA12 from "./technical/Technical Articles12.png";
import technicalA13 from "./technical/Technical Articles13.png";
import technicalA14 from "./technical/Technical Articles14.png";
import technicalA15 from "./technical/Technical Articles15.png";
import technicalA16 from "./technical/Technical Articles16.png";
import technicalA17 from "./technical/Technical Articles17.png";
import technicalA18 from "./technical/Technical Articles18.png";
import technicalA19 from "./technical/Technical Articles19.png";
import technicalA20 from "./technical/Technical Articles20.png";
import technicalA21 from "./technical/Technical Articles21.png";
import technicalA22 from "./technical/Technical Articles22.png";
import technicalA23 from "./technical/Technical Articles23.png";
import technicalA24 from "./technical/Technical Articles24.png";
import technicalA25 from "./technical/Technical Articles25.png";
import technicalA26 from "./technical/Technical Articles26.png";
import technicalA27 from "./technical/Technical Articles27.png";
import technicalA28 from "./technical/Technical Articles28.png";
import technicalA29 from "./technical/Technical Articles29.png";
import technicalA30 from "./technical/Technical Articles30.png";
import technicalA31 from "./technical/Technical Articles31.png";
import technicalA32 from "./technical/Technical Articles32.png";
import technicalA33 from "./technical/Technical Articles33.png";
import technicalA34 from "./technical/Technical Articles34.png";
import technicalA35 from "./technical/Technical Articles35.png";
import technicalA36 from "./technical/Technical Articles36.png";
import technicalA37 from "./technical/Technical Articles37.png";
import technicalA38 from "./technical/Technical Articles38.png";
import technicalA39 from "./technical/Technical Articles39.png";
import technicalA40 from "./technical/Technical Articles40.png";
import technicalA41 from "./technical/Technical Articles41.png";
import technicalA42 from "./technical/Technical Articles42.png";
import technicalA43 from "./technical/Technical Articles43.png";
import technicalA44 from "./technical/Technical Articles44.png";
import technicalA45 from "./technical/Technical Articles45.png";
import technicalA46 from "./technical/Technical Articles46.png";
import technicalA47 from "./technical/Technical Articles47.png";
import technicalA48 from "./technical/Technical Articles48.png";
import technicalA49 from "./technical/Technical Articles49.png";
import technicalA50 from "./technical/Technical Articles50.png";
import technicalA51 from "./technical/Technical Articles51.png";
import technicalA52 from "./technical/Technical Articles52.png";
import technicalA53 from "./technical/Technical Articles53.png";
import technicalA54 from "./technical/Technical Articles54.png";
import technicalA55 from "./technical/Technical Articles55.png";
import technicalA56 from "./technical/Technical Articles56.png";
import technicalA57 from "./technical/Technical Articles57.png";
import technicalA58 from "./technical/Technical Articles58.png";
import technicalA59 from "./technical/Technical Articles59.png";
import drawings1 from "./Drawings/Drawings/drawings1.png";
import drawings2 from "./Drawings/Drawings/drawings2.png";
import drawings3 from "./Drawings/Drawings/drawings3.png";
import drawings4 from "./Drawings/Drawings/drawings4.png";
import photo2 from "./photonew/photonew/photo2.png";
import photo3 from "./photonew/photonew/photo3.png";
import photo4 from "./photonew/photonew/photo4.png";
import photo5 from "./photonew/photonew/photo5.png";
import photo6 from "./photonew/photonew/photo6.png";
import photo7 from "./photonew/photonew/photo7.png";
import photo8 from "./photonew/photonew/photo8.png";
import photo9 from "./photonew/photonew/photo9.png";
import photo10 from "./photonew/photonew/photo10.png";
import photo11 from "./photonew/photonew/photo11.png";

import "./Cssmag2.css"
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'

import arrow from "./arrow.png";
import ZoomableImage from "./zoom";


const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  
   
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        
        <div className="page-image"></div>
        
        <div className="page-text">{props.children}</div>
        <div className="page-footer">{props.number + 1}</div>
        
      </div>
    </div>
  );
});

class DemoBook extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      totalPage: 108,
    };
  }

  
  nextButtonClick = () => {
    this.flipBook.pageFlip().turnToNextPage()
  };



prevButtonClick = () => {
    this.flipBook.pageFlip().turnToPrevPage();
  };
  onPage = (e) => {
    this.setState({
      page: e.data,
    });
  };

 
    

  render() {
    return (
      <div><body >
      <div className="container"><div className="block">
      <div className="back3"><img src={back2} width={"30%"}/> </div>
        <HTMLFlipBook
         width={450}
          height={673}
          size="stretch"
          minWidth={361}
          maxWidth={370}
          minHeight={450}
          maxHeight={433}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          autoSize={true}
          
          flippingTime={960}
          onFlip={this.onPage}
          onChangeOrientation={this.onChangeOrientation}
          onChangeState={this.onChangeState}
          className="demo-book"
          ref={(el) => (this.flipBook = el)}
          
          clickEventForward={true}
          showPageCorners={true}
          
    disableFlipByClick={true}
        >

          <PageCover><Zoom>
      <img
        src={back} alt="react logo" 
        
        align-items= "stretch"
        width="100%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></PageCover>
          
    <Page number={1}><Zoom>
      <img
        src={lead2} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
    
    <Page number={1}><Zoom>
      <img
        src={lead} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
    <Page><ZoomableImage/></Page>
    
    <Page number={1}><Zoom>
      <img
        src={Ab} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
    <Page number={1}><Zoom>
      <img
        src={facalty2} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
    <Page number={1}><Zoom>
      <img
        src={facalty3} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
     {/*Drawing */}
     <Page number={89}><Zoom>
      <img
        src={Drawings} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={89}><Zoom>
      <img
        src={drawings1} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={89}><Zoom>
      <img
        src={drawings2} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={89}><Zoom>
      <img
        src={drawings3} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={89}><Zoom>
      <img
        src={drawings4} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          {/*poem*/}
          <Page number={1}><Zoom>
      <img
        src={Poem} alt="react logo" 
        top={"50%"}
        align-items= "center"
        position={"absolute"}
        width="97%"
        
	
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
          <Page number={2} src={poem1} alt="react logo"  > <Zoom>
   <div>  <img
        src={poem1} alt="react logo" 
        
        align-items= "stretch"

        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between" 
  
         
      /></div> 
    </Zoom></Page>
          <Page number={3}><Zoom>
      <img
        src={poem2} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "90%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={4}><Zoom>
      <img
        src={poem3} alt="react logo" 
        
        align-items= "stretch"
        width="96%"

	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={5}><Zoom>
      <img
        src={poem4} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={6}><Zoom>
      <img
        src={poem5} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={7}><Zoom>
      <img
        src={poem6} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={8}><Zoom>
      <img
        src={poem7} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={9}><Zoom>
      <img
        src={poem8} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={10}><Zoom>
      <img
        src={poem9} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={11}><Zoom>
      <img
        src={poem10} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={12}><Zoom>
      <img
        src={poem11} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={13}><Zoom>
      <img
        src={poem12} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={14}><Zoom>
      <img
        src={poem13} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={15}><Zoom>
      <img
        src={poem14} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={16}><Zoom>
      <img
        src={poem15} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={17}><Zoom>
      <img
        src={poem16} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
        {/*photography*/}
        <Page number={89}><Zoom>
      <img
        src={Photographs} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
   
    <Page number={89}><Zoom>
      <img
        src={photo2} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={89}><Zoom>
      <img
        src={photo3} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={89}><Zoom>
      <img
        src={photo4} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={89}><Zoom>
      <img
        src={photo5} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={89}><Zoom>
      <img
        src={photo6} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={89}><Zoom>
      <img
        src={photo7} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={89}><Zoom>
      <img
        src={photo8} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={89}><Zoom>
      <img
        src={photo9} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={89}><Zoom>
      <img
        src={photo10} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={89}><Zoom>
      <img
        src={photo11} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    
{/*shortstory*/}
<Page number={18}><Zoom>
      <img
        src={Stories} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={18}><Zoom>
      <img
        src={shortstory1} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={19}><Zoom>
      <img
        src={shortstory2} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={20}><Zoom>
      <img
        src={shortstory3} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={21}><Zoom>
      <img
        src={shortstory4} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={22}><Zoom>
      <img
        src={shortstory5} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={23}><Zoom>
      <img
        src={shortstory6} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={24}><Zoom>
      <img
        src={shortstory7} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={26}><Zoom>
      <img
        src={shortstory8} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={27}><Zoom>
      <img
        src={shortstory9} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={28}><Zoom>
      <img
        src={shortstory10} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={29}><Zoom>
      <img
        src={shortstory11} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={30}><Zoom>
      <img
        src={shortstory12} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={31}><Zoom>
      <img
        src={shortstory13} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={32}><Zoom>
      <img
        src={shortstory14} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>

  {/*Technical Essays23*/}
  <Page number={55}><Zoom>
      <img
        src={Essays} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={33}><Zoom>
      <img
        src={shortstory15} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={34}><Zoom>
      <img
        src={technical1} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={35}><Zoom>
      <img
        src={technical2} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={36}><Zoom>
      <img
        src={technical3} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={37}><Zoom>
      <img
        src={technical4} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={38}><Zoom>
      <img
        src={technical5} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={39}><Zoom>
      <img
        src={technical6} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={39}><Zoom>
      <img
        src={technical7} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={40}><Zoom>
      <img
        src={technical8} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={41}><Zoom>
      <img
        src={technical9} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={42}><Zoom>
      <img
        src={technical10} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={43}><Zoom>
      <img
        src={technical11} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={44}><Zoom>
      <img
        src={technical12} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={45}><Zoom>
      <img
        src={technical13} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={46}><Zoom>
      <img
        src={technical14} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={47}><Zoom>
      <img
        src={technical15} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={48}><Zoom>
      <img
        src={technical16} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={49}><Zoom>
      <img
        src={technical17} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={50}><Zoom>
      <img
        src={technical18} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={51}><Zoom>
      <img
        src={technical19} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={52}><Zoom>
      <img
        src={technical20} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={53}><Zoom>
      <img
        src={technical21} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={54}><Zoom>
      <img
        src={technical22} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={55}><Zoom>
      <img
        src={technical23} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={55}><Zoom>
      <img
        src={Articles} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={56}><Zoom>
      <img
        src={technicalA1} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={57}><Zoom>
      <img
        src={technicalA2} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={58}><Zoom>
      <img
        src={technicalA3} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={58}><Zoom>
      <img
        src={technicalA4} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={59}><Zoom>
      <img
        src={technicalA5} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={60}><Zoom>
      <img
        src={technicalA6} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={61}><Zoom>
      <img
        src={technicalA7} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={62}><Zoom>
      <img
        src={technicalA8} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={63}><Zoom>
      <img
        src={technicalA9} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={64}><Zoom>
      <img
        src={technicalA10} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={65}><Zoom>
      <img
        src={technicalA11} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={66}><Zoom>
      <img
        src={technicalA12} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={67}><Zoom>
      <img
        src={technicalA13} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={68}><Zoom>
      <img
        src={technicalA14} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={69}><Zoom>
      <img
        src={technicalA15} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={70}><Zoom>
      <img
        src={technicalA16} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={71}><Zoom>
      <img
        src={technicalA17} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={72}><Zoom>
      <img
        src={technicalA18} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={73}><Zoom>
      <img
        src={technicalA19} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={74}><Zoom>
      <img
        src={technicalA20} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={75}><Zoom>
      <img
        src={technicalA21} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={76}><Zoom>
      <img
        src={technicalA22} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={77}><Zoom>
      <img
        src={technicalA23} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={78}><Zoom>
      <img
        src={technicalA24} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={79}><Zoom>
      <img
        src={technicalA25} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={80}><Zoom>
      <img
        src={technicalA26} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={81}><Zoom>
      <img
        src={technicalA27} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={81}><Zoom>
      <img
        src={technicalA28} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={82}><Zoom>
      <img
        src={technicalA29} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={83}><Zoom>
      <img
        src={technicalA30} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={84}><Zoom>
      <img
        src={technicalA30} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={85}><Zoom>
      <img
        src={technicalA31} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={86}><Zoom>
      <img
        src={technicalA32} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={87}><Zoom>
      <img
        src={technicalA33} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={88}><Zoom>
      <img
        src={technicalA34} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={89}><Zoom>
      <img
        src={technicalA35} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={90}><Zoom>
      <img
        src={technicalA36} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={91}><Zoom>
      <img
        src={technicalA37} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={92}><Zoom>
      <img
        src={technicalA38} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={93}><Zoom>
      <img
        src={technicalA39} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={94}><Zoom>
      <img
        src={technicalA40} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>

    <Page number={95}><Zoom>
      <img
        src={technicalA41} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={96}><Zoom>
      <img
        src={technicalA42} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={97}><Zoom>
      <img
        src={technicalA43} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={98}><Zoom>
      <img
        src={technicalA44} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={99}><Zoom>
      <img
        src={technicalA45} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={100}><Zoom>
      <img
        src={technicalA46} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={101}><Zoom>
      <img
        src={technicalA47} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={102}><Zoom>
      <img
        src={technicalA48} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={103}><Zoom>
      <img
        src={technicalA49} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={104}><Zoom>
      <img
        src={technicalA50} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={105}><Zoom>
      <img
        src={technicalA51} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={106}><Zoom>
      <img
        src={technicalA52} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={107}><Zoom>
      <img
        src={technicalA53} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={108}><Zoom>
      <img
        src={technicalA54} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={89}><Zoom>
      <img
        src={technicalA55} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={89}><Zoom>
      <img
        src={technicalA56} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={89}><Zoom>
      <img
        src={technicalA57} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={89}><Zoom>
      <img
        src={technicalA58} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={89}><Zoom>
      <img
        src={technicalA59} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
    <Page number={89}><Zoom>
      <img
        src={End} alt="react logo" 
        
        align-items= "stretch"
        width="96%"
	height= "96%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>

          <Page number={6}></Page>
          <Page number={6}></Page>
          <Page number={6}></Page>
          <Page number={6}></Page>
          <Page number={6}></Page>
          <Page number={6}></Page>
          <Page number={6}></Page>
          <PageCover>THE END</PageCover>

        </HTMLFlipBook>
        <div className="container">
          
          <div>
          <div>

<button className="button1" type="button1" onClick={this.prevButtonClick} >
  <img src={arrow} width={"40px"} style={{
  
  position: "center",   rotate: "180deg", }}/>
</button>
<div className="Bottom2">
[<span>{this.state.page}</span> of 
   <span>{this.state.totalPage}</span>]
</div>
<button className="button2" type="button2" onClick={this.nextButtonClick}>
 <img src={arrow} width={"40px"} style={{
  
position: "center",  }}/>
</button>

</div>
           <i>{this.state.state}</i><i>{this.state.orientation}</i>

          </div>
        </div>

        </div>
</div></body>
              </div>
    );
  }
}

export default DemoBook;