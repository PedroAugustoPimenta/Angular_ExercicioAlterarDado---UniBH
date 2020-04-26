import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {
  @Input() Array;
  @Output() atualizaEndereco = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }


  Atualizar(local, cidade, pais) {
    this.atualizaEndereco.emit({ name: this.Array.name, location: { address: local, city: cidade, country: pais } });
  }
}


