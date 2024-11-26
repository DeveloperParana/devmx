import { ImageOpenGraph } from './interfaces/image-open-graph';
import { VideoOpenGraph } from './interfaces/video-open-graph';
import { Meta, Title } from '@angular/platform-browser';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Graph {
  constructor(private _meta: Meta, private _title: Title) {}

  setImage(graph: ImageOpenGraph) {
    this._title.setTitle(graph.title);

    this.#setProperty('url', graph.url);
    this.#setProperty('type', 'website');
    this.#setProperty('title', graph.title);
    this.#setProperty('description', graph.description);

    this.#setProperty('image', graph.image);
    this.#setProperty('image:type', graph.type);
    this.#setProperty('image:width', graph.width);
    this.#setProperty('image:height', graph.height);
  }

  setVideo(graph: VideoOpenGraph) {
    this._title.setTitle(graph.title);

    this.#setProperty('url', graph.url);
    this.#setProperty('type', 'website');
    this.#setProperty('title', graph.title);
    this.#setProperty('description', graph.description);

    this.#setProperty('video', graph.video);
    this.#setProperty('image:type', graph.type);
    this.#setProperty('image:width', graph.width);
    this.#setProperty('image:height', graph.height);
  }

  #setProperty(property: string, content: string | number) {
    const selector = this.#getSelector(property);

    property = `og:${property}`;

    content = `${content}`;

    this._meta.updateTag({ property, content }, selector);
  }

  #getSelector(property: string) {
    return `property="og:${property}"`;
  }
}
