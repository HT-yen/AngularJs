import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
name: 'image'
})
export class ImagePipe implements PipeTransform {
    transform(src: string): any {
        if (!src) {
            return `http://file.vforum.vn/hinh/2017/05/hinh-chibi-buon-de-thuong-3.jpg`;
        }
        else return src;
    }
}