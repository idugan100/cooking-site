import './ThemeSelector.css'


import { useTheme } from '../../hooks/useTheme'
import { withRouter } from 'react-router-dom';
const themeColors=['red','blue','green']

export default function ThemeSelector() {
    const {mode,changeColor,changeMode}=useTheme();
    const toggle=()=>{
        changeMode(mode==='dark' ? 'light':'dark')

    }
    console.log(mode)
  return (
    <div className='theme-selector'>
        <div className='mode-toggle'><span style={{background:'white'}} onClick={toggle}>&#9788;</span></div>
        <div className="theme-buttons">
            {themeColors.map(color=>
                <div
                key={color}
                onClick={()=>changeColor(color)}
                style={{background:color}}
                />
            )}

        </div>
    </div>
  )
}
