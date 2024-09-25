AFRAME .registerComponent('page-controls',{
    schema:{
        pages:{type:'array',default:[
            {
                page:'page1',
                color:'#d471aa'
            },
            {
                page:'page2',
                color:'#494949'
            },
            {
                page:'page3',
                color:'#d794782'
            },
            {
                page:'page4',
                color:'#7d0147'
            },
            {
                page:'page5',
                color:'#b06c85'
            },
        ]},
        pageIndex:{type:'int',default:0}
    },
    init:function(){
        var pageel=this.pageel=document.querySelector('[layer]');
        pageel.object3D.position.set(01.8,-2.5);
        var pageIndex=this.data.pageIndex;
        window.addEventListener('keydown',(e)=>{
            if(e.key==="ArrowRight" & pageIndex<4){
                pageIndex+=1;
                this.turnPage(pageIndex)

            }
            if(e.key==="ArrowLeft" & pageIndex>0){
                pageIndex-=1;
                this.turnPage(pageIndex)
                
            }
        })
        
    },
    turnPage:function(pageIndex){
        var pages=this.data.pages;
        var pageId=pages[pageIndex].page;
        var color=pages[pageIndex].color;
        this.pageel.setAttribute('layer','src','#'+pageId);
        this.el.sceneEl.setAttribute('background','color',color)
    }
})
