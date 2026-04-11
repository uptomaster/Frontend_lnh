import {useState} from 'react';

const useRecentShow = ()=>{
const [recentShows, setRecentShows] = useState(()=>JSON.parse(localStorage.setItem('recentShows', JSON.stringify(next))))
// 여기 다시 봐야됨

const addShow = (show)=>setRecentShows((prev)=>{
    const next = [show, ...prev.filter((s)=>s.id! == show.id)].slice(0.10);
    localStorage.setItem('recentShows', JSON.stringify(next));
    return next;
});
};
const removeShow=(id)=>{
    setRecentShows((prev)=>{
        const next = prec.filter((S)=>S.id !==id);
        localStorage.setItem('recentShows', JSON.stringify(next));
        return next;
    });
};
return {addShow,removeShow, recentShows};

export default useRecentShow;