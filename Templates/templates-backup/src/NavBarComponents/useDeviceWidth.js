import { useState, useEffect } from 'react'

const useDeviceWidth = () => {
    
    const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

    const updateDevice = () => {
        setDesktop(window.innerWidth > 768)
    }

    useEffect(() => {
        window.addEventListener('resize', updateDevice)

        return () => window.removeEventListener('resize', updateDevice)

    })

    return { isDesktop }
    
}

export default useDeviceWidth
