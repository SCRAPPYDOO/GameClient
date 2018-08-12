import { TestBed, inject } from '@angular/core/testing';

import { WebsocketService } from './web-socket.service';

describe('WebSocketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebsocketService]
    });
  });

  it('should be created', inject([WebsocketService], (service: WebsocketService) => {
    expect(service).toBeTruthy();
  }));
});
