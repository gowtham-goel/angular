import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swagger',
  templateUrl: './swagger.component.html',
  styleUrls: ['./swagger.component.css']
})
export class SwaggerComponent implements OnInit {

  sampleJSON = '{"name":"jackie","std":"10"}';

  constructor() { }

  ngOnInit(): void {}

  parseJSON() {
    console.log(JSON.parse(this.sampleJSON));
    this.createResponseJSON();
  }

  createResponseJSON() {
    const responses =  {
      200: {
        description: 'description for success response',
        examples: {
          'application/json': {
            ok: true
          }
        },
        schema: {
          additionalProperties: true,
          description: 'schema for success response',
          properties: {
            $ref: '#/definitions/defs_ok_true'
          },
          required: ['ok'],
          title: 'API success schema',
          type: 'object'
        }
      },
      default: {
        description: 'description for error response',
        examples: {
          'application/json': {
            error: 'error no data returned',
            ok: false
          }
        },
        schema: {
          additionalProperties: true,
          description: 'schema for error response',
          properties: {
            error: {
              type: 'string'
            },
            ok: {
              $ref: '#/definitions/defs_ok_false'
            }
          },
          required: ['ok', 'error'],
          title: 'API error schema',
          type: 'object'
        }
      }
    };

    const definitions = {
      defs_ok_false: {
        enum: [false],
        title: 'default failure response',
        type: 'boolean'
      },
      defs_ok_true: {
        enum: [true],
        title: 'default success response',
        type: 'boolean'
      }
    };

    // Object.prototype.toString.call()
    // typeof
    // Array.isArray()

    console.log(responses);
    console.log(definitions);
  }

}
