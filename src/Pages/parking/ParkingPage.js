import './ParkingPage.css';
import { useState } from "react";
import ParkingAddressModal from "../../components/modals/ParkingAddressModal";
import { getCurrentLocation  } from "../../utils/LocationManager";
import { AuthContext } from '../../utils/Auth';
import { useContext } from 'react';
import { Redirect } from 'react-router';
import ParkingButtonsComp from '../../components/ParkingPageButtonsComp';

/**
 *  Created by Gal Shimron  
 *  This class will handle Parking Feature
 *  
 */


function ParkingPage({cities}) {

    const [whatToShow,setWhatToShow] = useState("");
    const [mapUrl,setMapUrl] = useState("");

    const [mainBtnText, setMainBtnText] = useState("Save Parking");
    const [showParkingAddressModal ,updateShowParkingAddressModal] = useState(false);

    const [parkingLocation,updateParkingLocation]                  = useState();
    const [currentLocation,updateCurrentLocation]                  = useState();

    const [parkingLatLng, updateParkingLatLng]                     = useState();
    const [currentLatLng, updateCurrentLatLng]                     = useState();

    /**
     * Main button have 2 functions:
     *  1. Get Current parking location 
     *  2. Get current location to use in "direction" Mode for directions back to the car.
     * 
     * */
    const onMainParkingButtonClick = ()=> { 
        document.getElementById("p-loader").className = "lds-spinner";

        if (typeof parkingLatLng === 'undefined' && typeof parkingLocation === 'undefined'){
            getCurrentLocation(updateParkingLatLng, updateShowParkingAddressModal , "parkingLocation",setMapUrl,setWhatToShow, parkingLatLng, setMainBtnText);
        }
        else {
            getCurrentLocation(updateCurrentLatLng ,updateShowParkingAddressModal, "currentLocation",setMapUrl,setWhatToShow  , parkingLatLng);
        }      
    }

    const onFindParkingButtonClick =() =>{
        document.getElementById("p-loader").className = "lds-spinner";
        setMainBtnText("Save Parking");
        updateParkingLocation();
        updateParkingLatLng()
        getCurrentLocation(updateCurrentLatLng ,updateShowParkingAddressModal , "findParkingLot" , setMapUrl,setWhatToShow , parkingLatLng );
    }
    
    const {currentUser} = useContext(AuthContext);
    if (typeof currentUser ==='undefined' || currentUser ===null) {
        return <Redirect to="/login" />;
    }

    if (mapUrl !== ""){
        document.getElementById("p-loader").className = "";
    }


    return(<div id="p-parking-page-container">

            {mapUrl !== "" ? 
            <div className="p-parking-page-map-content-container">
                <ParkingButtonsComp mainBtnText={mainBtnText} onMainParkingButtonClick={onMainParkingButtonClick} onFindParkingButtonClick={()=>onFindParkingButtonClick()}  />
                <iframe
                    width="800"
                    height="600"
                    style={{border:0}}
                    loading="lazy"
                    allowFullScreen
                    src={mapUrl}>
                </iframe>
            </div>
            :
            <div>
                <div className="title-container">
                    <h1 >Would you like to park ?</h1>
                    <img src="./park_icon.png"  alt="parking_lot"/>
                </div>
                <ParkingButtonsComp mainBtnText={mainBtnText} onMainParkingButtonClick={onMainParkingButtonClick} onFindParkingButtonClick={()=>onFindParkingButtonClick()}  />
            </div>
            }             
            <div id="p-loader" ><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            {showParkingAddressModal ? 
            <ParkingAddressModal show={showParkingAddressModal}
                                 onClose={()=>  updateShowParkingAddressModal(false)}
                                 whatToShow={whatToShow}
                                 setMapUrl= {setMapUrl}
                                 cities={cities}
                                 parkingLocation={parkingLocation}
                                 mainBtnText={mainBtnText}
                                 setMainBtnText={setMainBtnText}
                                 updateParkingLocation={updateParkingLocation}/>
            :
            <></>
            }
        </div> )
    }


export default ParkingPage