
import { UniqueIdService } from "./unique-id.service"


describe(UniqueIdService.name, () => {

    let service: UniqueIdService;

    beforeEach(() => {
        service = new UniqueIdService();
    });

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
        should genarate id when called with prefix`, () => {
            const id = service.generateUniqueIdWithPrefix('app');
            const startWith = id.startsWith('app-'); 
            expect(startWith).toBeTruthy();
    })

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
        should not generate duplicate IDs when called multiple times`, () => {
            const ids = new Set();
            for (let i = 0; i < 50; i++) {
                const id = service.generateUniqueIdWithPrefix('app');
                ids.add(id);
            }
            expect(ids.size).toBe(50);
    })

    it(`#${UniqueIdService.prototype.getNumberOfGenerateUniqueIds.name} 
        should return the number of generateIds when called`, () => {
            service.generateUniqueIdWithPrefix('app');
            service.generateUniqueIdWithPrefix('app');
            expect(service.getNumberOfGenerateUniqueIds()).toBe(2);
    })

})