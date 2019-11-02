import { WordsService } from './words.service';
import { BehaviorSubject  } from 'rxjs';
import { async } from '@angular/core/testing';

function equalLen(   devObj   ){


    if(   devObj.test.length !== devObj.actual.length   ){   fail()   }


}
describe('WordsService', () => {
    const service  = new WordsService()
    let behaviorSubject = null
    beforeEach(async(() => {
        behaviorSubject = new BehaviorSubject<boolean>(false)

    }));    

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should have all ids reference correctly', () => {
        let correctId = ['w_o_r_d_s_Title','w_o_r_d_s_Line','w_o_r_d_s_paragraph','w_o_r_d_s_Dash','w_o_r_d_s_paragraphDash']
        equalLen({
            test:correctId,
            actual:service.wordsVal
        })
        for(   let i in correctId   ){


            if(   correctId[i] !== service.wordsVal[i]   ){


                fail()


            }


        }        
    }); 
    
    it('should have all *ngIf values show up correctly', () => {
        let correctBool = ['true','true','true','true','true']
        equalLen({
            test:correctBool,
            actual:service.wordsbool
        })        
        for(   let i in correctBool   ){


            if(   correctBool[i] !== service.wordsbool[i]   ){


                fail()


            }


        }

    });     

    it('should have wordsRepositionDashesCount exist and equal to 0', () => {
        expect(service.wordsRepositionDashesCount).not.toBeUndefined()
        expect(service.wordsRepositionDashesCount).toEqual(0)
    });     

    it('"s" wordsReposiitionDashes fn should do as expected',()=>{
        // spyOn(service,'wordsRepositionDashes')
        expect(typeof service.wordsRepositionDashes({})).toMatch('function')
      
    })
});



