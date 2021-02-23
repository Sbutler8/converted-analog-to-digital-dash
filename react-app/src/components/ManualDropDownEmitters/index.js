import React from 'react';
import './ManualDropDownEmitters.css';

const ManualDropDownEmitters = ({...props}) => {
    return (
        <div className="dropdown">
            <button className="warning-button">Emit Warning Lights</button>
            <div className="dropdown-content">
                <label htmlFor="engine"><input id="warning-item" type='checkbox' name="engine" checked={props.engineHidden ? '': 'checked'} onClick={() => props.engineHidden ? props.setEngineHidden(false):props.setEngineHidden(true)}></input>Check Engine Light</label>
                <label htmlFor="gas"><input id="warning-item" type='checkbox' name="gas" checked={props.gasHidden ? '': 'checked'} onClick={() => props.gasHidden ? props.setGasHidden(false):props.setGasHidden(true)}></input>Low On Gas</label>
                <label htmlFor="battery"><input id="warning-item" type='checkbox' name="battery" checked={props.batteryHidden ? '': 'checked'} onClick={() => props.batteryHidden ? props.setBatteryHidden(false):props.setBatteryHidden(true)}></input>Battery Malfunction</label>
                <label htmlFor="lights"><input id="warning-item" type='checkbox' name="lights" checked={props.lightsHidden ? '': 'checked'} onClick={() => props.lightsHidden ? props.setLightsHidden(false):props.setLightsHidden(true)}></input>Low Beams On</label>
                <label htmlFor="oil"><input id="warning-item" type='checkbox' name="oil" checked={props.oilHidden ? '': 'checked'} onClick={() => props.oilHidden ? props.setOilHidden(false):props.setOilHidden(true)}></input>Low Oil</label>
            </div>
        </div>
    )
}

export default ManualDropDownEmitters;
