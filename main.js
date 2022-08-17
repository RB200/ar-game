AFRAME.registerComponent('grab-item',{
    schema:{
        selectedItem:{default:'', type:'string'}
    },
    init: function(){
        this.handleMouseEnter()
    },
    handleMouseEnter: function(){
        this.el.addEventListener('mouseenter',()=>{
            console.log('event listener added')
            
            window.addEventListener('keydown',(e)=>{
                this.handleMouseLeave()
                console.log('key pressed')
                if(e.key === ' '){
                    var scene = document.querySelector('#scene')
                    var heldOrb = document.createElement('a-sphere')
                    var orb = document.querySelector('#orb')
                    
                    orb.setAttribute('visible','false')
                    heldOrb.setAttribute('radius',0.5)
    
                    selectedItem = this.el.getAttribute('id')
                    var cam = document.querySelector('#camera').object3D
                    var direction = new THREE.Vector3()
                    cam.getWorldDirection(direction)
    
                    heldOrb.setAttribute('position',{
                        x:0,
                        y:2,
                        z:0,
                    })
                    
                    scene.appendChild(heldOrb)
                    
                }
                
            })
            console.log(this.el)
            
        })
        
    },
    handleMouseLeave: function(){
        this.el.removeEventListener('mouseenter',()=>{console.log('event listener removed')})
        window.removeEventListener('keydown',()=>{console.log('event listener removed')})
    }
    
})