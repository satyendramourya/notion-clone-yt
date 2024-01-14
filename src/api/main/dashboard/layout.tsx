import React from 'react'

interface LayoutProps {
    childern: React.ReactNode;
    params: any;
}

const layoutPage: React.FC<LayoutProps> = ({ childern, params}) => {
  return (
    <div>layoutPage</div>
  )
}

export default layoutPage