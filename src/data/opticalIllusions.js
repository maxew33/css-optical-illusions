import OpticalIllusion1 from "../comp/OpticalIllusion1"
import OpticalIllusion2 from "../comp/OpticalIllusion2"
import OpticalIllusion3 from "../comp/OpticalIllusion3"
import OpticalIllusion4 from "../comp/OpticalIllusion4"
import OpticalIllusion5 from "../comp/OpticalIllusion5"
import OpticalIllusion6 from "../comp/OpticalIllusion6"
import OpticalIllusion7 from "../comp/OpticalIllusion7"
import { v4 as uuidv4 } from 'uuid'

const opticalIllusions = [
    {
        name: 'which segments are the longest ? red or blue ?',
        desc: '',
        comp: <OpticalIllusion1 />,
        id: uuidv4()
    },
    {
        name: 'which red disk is the biggest ? The left one or the right one ?',
        desc: '',
        comp: <OpticalIllusion2 />,
        id: uuidv4()
    },
    {
        name: 'Are the diagonal lines parallel ?',
        desc: '',
        comp: <OpticalIllusion3 />,
        id: uuidv4()
    },
    {
        name: 'Can you see the grey spots moving ?',
        desc: '',
        comp: <OpticalIllusion4 />,
        id: uuidv4()
    },
    {
        name: 'Are the vertical lines parallel ?',
        desc: '',
        comp: <OpticalIllusion5 />,
        id: uuidv4()
    },
    {
        name: 'Can you see the green spot ?',
        desc: '',
        comp: <OpticalIllusion6 />,
        id: uuidv4()
    },
    {
        name: 'Can you see the animation ?',
        desc: '',
        comp: <OpticalIllusion7 />,
        id: uuidv4()
    }
]

export default opticalIllusions