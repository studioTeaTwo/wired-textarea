import { WiredBase } from 'wired-lib/lib/wired-base';
import { TemplateResult, CSSResultArray } from 'lit-element';
import { Point } from 'wired-lib';
export declare class WiredTextarea extends WiredBase {
    disabled: boolean;
    rows: number;
    maxrows: number;
    autocomplete: string;
    autofocus: boolean;
    inputmode: string;
    placeholder: string;
    required: boolean;
    readonly: boolean;
    minlength?: number;
    maxlength?: number;
    private textareaInput?;
    private pendingValue?;
    static readonly styles: CSSResultArray;
    render(): TemplateResult;
    readonly textarea: HTMLTextAreaElement | undefined;
    value: string;
    firstUpdated(): void;
    protected canvasSize(): Point;
    protected draw(svg: SVGSVGElement, size: Point): void;
    private refire;
}
