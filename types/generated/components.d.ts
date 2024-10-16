import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentUrl extends Schema.Component {
  collectionName: 'components_component_urls';
  info: {
    displayName: 'Url';
  };
  attributes: {
    short_text: Attribute.String;
    url: Attribute.String;
  };
}

export interface ComponentTable extends Schema.Component {
  collectionName: 'components_component_tables';
  info: {
    displayName: 'Table';
  };
  attributes: {
    table: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'blockBalloon';
        }
      >;
    type: Attribute.Enumeration<['a', 'b']>;
  };
}

export interface ComponentSubtitle extends Schema.Component {
  collectionName: 'components_component_subtitles';
  info: {
    displayName: 'Subtitle';
  };
  attributes: {
    short_text: Attribute.String;
  };
}

export interface ComponentImage extends Schema.Component {
  collectionName: 'components_component_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    multiple_media: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ComponentFile extends Schema.Component {
  collectionName: 'components_component_files';
  info: {
    displayName: 'File';
  };
  attributes: {
    multiple_media: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    short_text: Attribute.String;
  };
}

export interface ComponentDescription extends Schema.Component {
  collectionName: 'components_component_descriptions';
  info: {
    displayName: 'Description';
  };
  attributes: {
    long_text: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'component.url': ComponentUrl;
      'component.table': ComponentTable;
      'component.subtitle': ComponentSubtitle;
      'component.image': ComponentImage;
      'component.file': ComponentFile;
      'component.description': ComponentDescription;
    }
  }
}
