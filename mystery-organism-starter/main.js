// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Create a factory function 
const pAequorFactory = (number, objectDna) => {
    return {
      _specimenNum: number,
      _objectDna: objectDna,
      mutate(){
        let i = Math.floor(Math.random() * this._objectDna.length);
        this._objectDna[i];
        let newBase = returnRandBase();

        while(this._objectDna[i] === newBase){
          newBase = returnRandBase();
        }

        this._objectDna[i] = newBase;

        return this._objectDna;
        
      },
      compareDNA(pAequor){
        let counter = 0;
        let totalcount = this._objectDna.length;
        for(let i = 0; i< pAequor._objectDna.length; i++){
          if(pAequor._objectDna[i] === this._objectDna[i]){
            counter++;
          }
        }
        console.log(`Similar Base : ${counter}`);
        let proportion = counter / totalcount;
        let percentage = proportion.toFixed(2) * 100;
        console.log(`${this._specimenNum} and ${pAequor._specimenNum} have ${percentage}% DNA in common.`);
      },
      willLikelySurvive(){
        let cCount = 0;
        let gCount = 0;
        for(let i=0; i<this._objectDna.length; i++){
          if(this._objectDna[i] === 'C'){
            cCount++;
          }else if(this._objectDna[i] === 'G'){
            gCount++;
          }
        }

        let cBases = cCount / this._objectDna.length;
        let gBases = gCount / this._objectDna.length;
        if(cBases.toFixed(2) >= 0.6 || gBases.toFixed(2) >= 0.6){
          return true;
        }else{
          return false;
        }
      }
    }
  }


// Create a certain amount of specimen
let pAequorInstances = [];

// for(let i=1; pAequorInstances.length <=30; i++){
//   let newpAequor = pAequorFactory(i, mockUpStrand());
//   if(newpAequor.willLikelySurvive()){
//     pAequorInstances.push(newpAequor);
//   }
// }

let i=0;
while(pAequorInstances.length !== 30){
  let newpAequor = pAequorFactory(i, mockUpStrand());
  if(newpAequor.willLikelySurvive()){
    pAequorInstances.push(newpAequor);
  }
  i++
}

console.log(pAequorInstances);


// let spect1 = pAequorFactory(01, mockUpStrand());
// let spect2 = pAequorFactory(02, mockUpStrand());


// console.log(spect1);
// console.log(spect2);
// spect2.compareDNA(spect1);
// console.log(spect1.willLikelySurvive());


