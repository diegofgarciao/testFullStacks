import { BlockResponse } from './../../models/block.model';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BlockStoreService } from './../services/block-store.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BlockComponent } from './block.component';


describe('BlockComponent', () => {
  let component: BlockComponent;
  let fixture: ComponentFixture<BlockComponent>;
  let service: BlockStoreService;
  let httpTestingController : HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
      declarations: [ BlockComponent ],
      providers: [BlockStoreService]
    })
    .compileComponents();
    fixture = TestBed.createComponent(BlockComponent);
    service = TestBed.get(BlockStoreService);
    httpTestingController = TestBed.get(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test onInit', () => {
    fixture = TestBed.createComponent(BlockComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    expect(component).toBeTruthy();
  })

  it('getData Service', () => {
    const dataMock = new BlockResponse();
    const req = httpTestingController.expectOne(() => true);
    expect(req.request.method).toBe('GET');
    req.flush(dataMock);
  })

});
