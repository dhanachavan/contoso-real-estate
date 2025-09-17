import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelloWorldComponent } from './hello-world.component';

describe('HelloWorldComponent', () => {
	let component: HelloWorldComponent;
	let fixture: ComponentFixture<HelloWorldComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HelloWorldComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(HelloWorldComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have a title', () => {
		component.title = 'Hello World';
		expect(component.title).toEqual('Hello World');
	});
});