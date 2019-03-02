import  styled  from 'styled-components'
import { styTM } from '../styleVarible'

export const RowEL =  styled.div`
    max-width: ${styTM.grid.width};
    margin: 0 auto;

    &:not(:last-child) {
        margin-bottom: ${styTM.grid.vertical};


    }
    
`