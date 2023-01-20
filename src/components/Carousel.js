import React from 'react';
import BearCarousel, {TBearSlideItemDataList, BearSlideItem} from 'bear-react-carousel';
import 'bear-react-carousel/dist/index.css';

const images = [
        {id: 1, imageUrl: "https://dummyimage.com/900x400/dee2e6/6c757d.jpg"},
        {id: 2, imageUrl: "https://dummyimage.com/900x400/dee2e6/6c757d.jpg"},
        {id: 3, imageUrl: "https://dummyimage.com/900x400/dee2e6/6c757d.jpg"},
    ];
    
const bearSlideItemData: TBearSlideItemDataList  = images.map(row => {
        return {
            key: row.id,
            children: <BearSlideItem imageUrl={row.imageUrl}/>
        };
    });


export const CustomBanner = () => {
    return <BearCarousel 
        data={bearSlideItemData}
        staticHeight="200px"
    />
}