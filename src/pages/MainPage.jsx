import React from 'react'
// utilizamos el hook usehistory
import { useHistory } from 'react-router-dom'
import CityList from './../components/CityList'
import AppFrame from './../components/AppFrame'
// Paper nos permite contener otros componentes dentro de este y les da un recuadro que se ve con sombra 
import Paper from '@material-ui/core/Paper'

const cities = [
    { city: "Buenos aires", country: "Argentina", countryCode: "AR"},
    { city: "Bogotá", country: "Colombia", countryCode: "CO" },
    { city: "Madrid", country: "España", countryCode: "ES" },
    { city: "Ciudad de México", country: "México", countryCode: "MX" },
]

const MainPage = () => {
    const history = useHistory()
    const onClickHandler = () => {
        // history.push permite trabajar con la url y cambiarla
        history.push("/city")
    }

    return (
        <AppFrame>
            <Paper elevation={3}>
                <CityList
                    cities={cities}
                    onClickCity={onClickHandler} />
            </Paper>
        </AppFrame>
    )
}

export default MainPage
