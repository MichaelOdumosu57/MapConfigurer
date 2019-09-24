import { WordsService } from './words.service';

describe('WordsService', () => {
    const service  = new WordsService()

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should have all ids reference correctly', () => {
        expect(service.wordsval0).toMatch('w_o_r_d_s')
        expect(service.wordsval1).toMatch('w_o_r_d_s_Line')
        expect(service.wordsval2).toMatch('w_o_r_d_s_paragraph')
        expect(service.wordsval3).toMatch('w_o_r_d_s_Dash')
        expect(service.wordsval4).toMatch('w_o_r_d_s_paragraphDash')
    }); 
    
    it('should have all *ngIf values show up correctly', () => {
      expect(service.wordsval0).toMatch('w_o_r_d_s')
      expect(service.wordsval1).toMatch('w_o_r_d_s_Line')
      expect(service.wordsval2).toMatch('w_o_r_d_s_paragraph')
      expect(service.wordsval3).toMatch('w_o_r_d_s_Dash')
      expect(service.wordsval4).toMatch('w_o_r_d_s_paragraphDash')
    });     

    it('should have wordsRepositionDashesCount exist and equal to 0', () => {
        expect(service.wordsRepositionDashesCount).not.toBeUndefined()
        expect(service.wordsRepositionDashesCount).toEqual(0)
    });     

    it('"s" wordsReposiitionDashes fn should do as expected',()=>{
        spyOn(service,'wordsRepositionDashes')
        service.wordsRepositionDashes({})
        expect(typeof  service.wordsRepositionDashes).toMatch('function')
      
    })
});



