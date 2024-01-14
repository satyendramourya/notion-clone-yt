import React from 'react'

interface LayoutProps {
    childern: React.ReactNode;
    params: any;
}

const layout: React.FC<LayoutProps>  = ({childern, params}) => {
  return (
      <main className="flex over-hidden h-screen">
            {childern}
    </main>
  )
}

export default layout