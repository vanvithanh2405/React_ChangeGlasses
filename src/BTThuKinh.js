import React, { Component } from 'react'

export default class BTThuKinh extends Component {
    
    dataGlasses = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./img/glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./img/glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./img/glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./img/glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./img/glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./img/glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./img/glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./img/glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./img/glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]
    
    state = {
        changeGlasses : {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./img/glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        
        imgSrc: "./img/glassesImage/v1.png"
    };

    handleChangeGlasses = (version) => {
        this.setState({
            imgSrc: `./img/glassesImage/${version}.png`,
        });
    }
    
    render() {
        let {changeGlasses} = this.state
        const textStyle = { cursor: "pointer"};
        return (
            <div>
                <p className="title text-center text-white">TRY GLASSES APP ONLINE</p>
                <div className="mt-5 image container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-6 d-flex justify-content-center align-items-center model">
                            <img src="./img/glassesImage/model.jpg" className="w-50 model" alt="..."></img>
                            <img src={this.state.imgSrc} className="w-40 glasses" style={{maxWidth: '150px'}}></img>
                            <div className="text">
                                <p className="description">{changeGlasses.desc}</p>
                            </div>
                        </div>

                        <div className="col-6 d-flex justify-content-center align-items-center">
                            <img src="./img/glassesImage/model.jpg" className="w-50" alt="..."></img>
                        </div>
                    </div>
                </div>

                <div className="container changeGlasses">
                    <div className="row d-flex align-items-center">
                        <div className="col-2" style={textStyle} 
                            onClick={()=> {
                                this.handleChangeGlasses("v1")
                            }}
                        >
                            <img src="./img/glassesImage/g1.jpg" className="w-100" alt="..."></img>
                        </div>

                        <div className="col-2" style={textStyle}
                            onClick={()=> {
                                this.handleChangeGlasses("v2")
                            }}
                        >
                            <img src="./img/glassesImage/g2.jpg" className="w-100" alt="..."></img>
                        </div>

                        <div className="col-2" style={textStyle} 
                            onClick={()=> {
                                this.handleChangeGlasses("v3")
                            }}
                        >
                            <img src="./img/glassesImage/g3.jpg" className="w-100" alt="..."></img>
                        </div>

                        <div className="col-2" style={textStyle}
                            onClick={()=> {
                                this.handleChangeGlasses("v4")
                            }}
                        >
                            <img src="./img/glassesImage/g4.jpg" className="w-100" alt="..."></img>
                        </div>

                        <div className="col-2" style={textStyle}
                            onClick={()=> {
                                this.handleChangeGlasses("v5")
                            }}
                        >
                            <img src="./img/glassesImage/g5.jpg" className="w-100" alt="..."></img>
                        </div>

                        <div className="col-2" style={textStyle}
                            onClick={()=> {
                                this.handleChangeGlasses("v6")
                            }}
                        >
                            <img src="./img/glassesImage/g6.jpg" className="w-100" alt="..."></img>
                        </div>

                        <div className="col-2" style={textStyle}
                            onClick={()=> {
                                this.handleChangeGlasses("v7")
                            }}
                        >
                            <img src="./img/glassesImage/g7.jpg" className="w-100" alt="..."></img>
                        </div>

                        <div className="col-2" style={textStyle}
                            onClick={()=> {
                                this.handleChangeGlasses("v8")
                            }}
                        >
                            <img src="./img/glassesImage/g8.jpg" className="w-100" alt="..."></img>
                        </div>

                        <div className="col-2" style={textStyle}
                            onClick={()=> {
                                this.handleChangeGlasses("v9")
                            }}
                        >
                            <img src="./img/glassesImage/g9.jpg" className="w-100" alt="..."></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
